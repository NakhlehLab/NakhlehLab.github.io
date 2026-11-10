"""
joint_dissimilarity_demo.py -- compare two phylogenetic networks with PhyNetPy.

Runs anywhere PhyNetPy is installed and needs no other files:

    pip install phynetpy
    python joint_dissimilarity_demo.py

The joint dissimilarity scores two rooted networks on the same taxa in two
parts.  Every reticulation is summarised by a tripartition (the block below
it and the two parent blocks with it deleted), and D_ret is the cost of the
best one-to-one matching of the two tripartition collections, with an
unmatched reticulation charged 3.  Deleting every reticulation block leaves a
tree-like remainder in each network, and D_tree compares those.  Then

    D_joint = D_ret + 3 * D_tree

with normalised forms in [0, 1].  Blocks and remainders are compared by one
of three structure dissimilarities: "leaf" (which taxa), "cluster" (which
clusters) or "nakhleh" (which vertex-equivalence classes; the default).
"""

import warnings

from phynetpy import read_newick, joint_dissimilarity

# The reader warns once per node when a Newick string carries no branch
# lengths.  The measure ignores lengths, so the warning is noise here.
warnings.filterwarnings("ignore", message="No branch length")


def report(title, r):
    """Print every field of a JointDissimilarityResult."""
    print(title)
    print(f"  reticulations        r1 = {r.r1}, r2 = {r.r2}   (m = {r.m})")
    print(f"  D_ret   (matching)   {r.D_ret:.3f}   normalised {r.D_ret_normalized:.3f}")
    print(f"  D_tree  (remainder)  {r.D_tree:.3f}")
    print(f"  D_joint              {r.D_joint:.3f}   normalised {r.D_joint_normalized:.3f}")
    print()


# Two one-reticulation networks on taxa A, B, C.  They differ only in which
# taxon the hybrid edge delivers: B in the estimate, A in the truth.
estimate = read_newick("((A,(B)#H1),(#H1,C));")
truth = read_newick("(((A)#H1,B),(#H1,C));")

# 1. The headline call.  Order does not matter: the measure is symmetric.
report("estimate vs truth", joint_dissimilarity(estimate, truth))

# 2. The three instantiations differ only in how two structures are compared.
#    Under "leaf", the hybrid blocks {B} and {A} cost 1 and the parent sides
#    cost 1 more, so D_ret = 2; the remainders share one of five labels, so
#    D_tree = 0.8 and D_joint = 2 + 3 * 0.8 = 4.4.
for kind in ("leaf", "cluster", "nakhleh"):
    r = joint_dissimilarity(estimate, truth, kind=kind)
    print(f"kind = {kind:8s}  D_ret = {r.D_ret:.3f}  D_tree = {r.D_tree:.3f}"
          f"  D_joint_normalized = {r.D_joint_normalized:.3f}")
print()

# 3. A tree has no reticulation, so the network's one is left unmatched and
#    charged the full cost of 3: the normalised reticulation term is 1.
tree = read_newick("((A,B),C);")
report("tree vs estimate", joint_dissimilarity(tree, estimate))

# 4. Identical topologies score 0.  Branch lengths, inheritance probabilities
#    and internal labels are ignored.
same = read_newick("((A:0.1,(B:0.2)#H1[&gamma=0.6]:0.3)X:0.4,(#H1:0.5,C:0.6)Y:0.7)Root;")
report("estimate vs itself, with branch lengths", joint_dissimilarity(estimate, same))

# 5. The same measure is available as a Network method.
r = estimate.joint_dissimilarity(truth, kind="cluster")
print(f"method form, kind = cluster:  D_joint_normalized = {r.D_joint_normalized:.3f}")
