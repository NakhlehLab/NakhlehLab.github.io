import random
from PhyNetPy.Graph import DAG
from PhyNetPy.MPSugar import MP_SUGAR

#Import the following two only if using subgenome map autogeneration capabilities
from PhyNetPy.NetworkParser import NetworkParser
from PhyNetPy.GeneTrees import GeneTrees


### STEP 1: COMPUTE TAXON MAPPINGS (MANUALLY or AUTOMATICALLY)

#Step 1a) Manual/Hardcoded mapping

# TRIMMED SCENARIO J
# taxon_map_trimmedJ : dict[str, list[str]]=  {'U': ['01uA', '01uB'], 'T': ['01tA', '01tB'], 'B': ['01bA'], 'F': ['01fA'], 
#                                                'V': ['01vB', '01vA'], 'C': ['01cA'], 'A': ['01aA'], 'D': ['01dA'], 'O': ['01oA']} 

# UNTRIMMED SCENARIO J
taxon_mapJ : dict[str, list[str]]=  {'F': ['01fA'], 'T': ['01tA', '01tB'], 'W': ['01wA', '01wB'], 'B': ['01bA'], 
                   'V': ['01vA', '01vB'], 'A': ['01aA'], 'U': ['01uA', '01uB'], 'C': ['01cA'], 
                   'E': ['01eA'], 'X': ['01xA', '01xB'], 'Y': ['01yA', '01yB'], 'O': ['01oA'], 
                   'Z': ['01zB', '01zA'], 'D': ['01dA']} 

#Step 1b) Automatically generated mapping

# TRIMMED SCENARIO J
# gene_trees_trimmedJ : list[DAG] = NetworkParser(".../Path/to/J_trimmed.nex").get_all_networks()
# taxon_map_trimmedJ = GeneTrees(gene_trees_trimmedJ).mp_sugar_map()

# UNTRIMMED SCENARIO J
# gene_trees_J : list[DAG] = NetworkParser(".../Path/to/J_untrimmed.nex").get_all_networks()
# taxon_mapJ = GeneTrees(gene_trees_J).mp_sugar_map()


#STEP 2:
#Choose how many hill climbing chains to do. We recommend doing at least 5 for the untrimmed version, and 3 should suffice for the untrimmed version.
num_hill_climbing_chains = 3

for dummy in range(num_hill_climbing_chains):
    
    #change pathname to unpruned nexus file if doing that version.
    output_networks : dict[tuple[DAG, int]] = MP_SUGAR(".../Path/to/J_trimmed.nex", taxon_mapJ, iter_ct = 500, seed = random.randint(0, 1000))

    #STEP 3: Analyze output
    for net, score in output_networks.items():
        print(net.to_newick())
        print(f"This network scored {score}!")
    
        # Do any other analysis you'd like to do here with the net object:
        #
        # INSERT STUFF HERE. 
        #
