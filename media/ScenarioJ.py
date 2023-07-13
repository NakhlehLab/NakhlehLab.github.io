from PhyNetPy.PhyAllop import MP_ALLOP
from PhyNetPy.NetworkParser import NetworkParser
from PhyNetPy.GeneTrees import GeneTrees
from PhyNetPy.Graph import DAG


gene_treesJ : list[DAG] = NetworkParser("absolute/path/to/MP_ALLOP_J.nex").get_all_networks()

# subgenome mapping for Scenario J
subgenome_mapJ : dict[str, list[str]]=  {'F': ['01fA'], 'T': ['01tA', '01tB'], 'W': ['01wA', '01wB'], 'B': ['01bA'], 
                   'V': ['01vA', '01vB'], 'A': ['01aA'], 'U': ['01uA', '01uB'], 'C': ['01cA'], 
                   'E': ['01eA'], 'X': ['01xA', '01xB'], 'Y': ['01yA', '01yB'], 'O': ['01oA'], 
                   'Z': ['01zB', '01zA'], 'D': ['01dA']} 

#Using mapping auto generation
#subgenome_mapJ = GeneTrees(gene_treesJ).mp_allop_map()

output_networks : list[tuple[DAG, int]] = MP_ALLOP(gene_treesJ, subgenome_mapJ)

index = 0
for net, score in output_networks:
    print(f"Output networks at <{index}> scored {score}!")
    
    #Prints each node in the graph, along with node characteristics such as branch lengths, hybrization ratio, node parents, etc
    net.print_graph()
    
    #Prints the node -> parent(s) mapping and the node -> children mapping
    net.print_adjacency()
    
    #Lists all edges
    net.pretty_print_edges()
    
    #Converts network to a newick string
    net.newick()
    
    index += 1
