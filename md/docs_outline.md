# Network Data Structures

* ### PhyNetPy.Network module

  * **NetworkError** class  
  * **NodeError** class  
  * **EdgeError** class  
  * **Node** class  
    * Core building block for phylogenetic networks and population genetics graphs  
  * **Edge** class  
    * Directed edge for connecting two Node objects  
  * **UEdge** class  
    * Undirected edge for connecting two Node objects  
  * **EdgeSet** class  
    * A container/bookkeeper for edges   
  * **NodeSet** class  
    * A container/bookkeeper for nodes  
  * **Network** class  
    * A rooted, directed (Edge objects only), acyclic phylogenetic network  
  * **Graph** class  
    * An unrooted, undirected graph (UEdge objects only).

* ### PhyNetPy.MSA module

  * **MSA** class  
    * Wrapper class for a set of taxa that have one or more DataSequence object associations per taxa.  
  * **DataSequence** class  
    * Wrapper class for a list of biological data symbols (DNA, RNA, Codons, etc.). 

* ### PhyNetPy.Matrix module

  * **MatrixError** class  
  * **Matrix** class

* ### PhyNetPy.GeneTrees module

  * **GeneTreeError** class  
  * **GeneTrees** class  
    * Wrapper class for a set of gene trees (Network objects) defined on a set of taxa

  ### 

# Input/Output

* ### PhyNetPy.IO

  * NetworkParser class  
    * Handles .nex (Nexus) file to Network object conversion  
  * NewickParser class  
    * Handles .newick (Rich Newick Format) file to .nex/Network object conversion  
  * NexusTemplate class  
    * Creates .nex file from Network object/MSA data

# Method Development Tools (Probabilistic Graphical Modeling)

* ### PhyNetPy.ModelGraph

  * **ModelError** class  
  * **Model** class  
    * A Model object is made up of ModelNodes that point to each other and that structurally define what happens when simulations or likelihoods or anything else is called on the Model.  
  * **ModelNode** class  
    * A general class that defines behavior of each node in the Model.  
  * **CalculationNode** class  
    * A type of ModelNode that synthesizes information about the model to make and propagate information about the model.  
  * **StateNode** class  
    * A type of ModelNode that stores information about the Model.  
  * **Accumulator** class  
    * A data storing StateNode that, when a CalculationNode has access to it, can bookkeep information during computations made with respect to the Model.  
  * **Parameter** class  
    * StateNodes that store information about various model parameters for access by the CalculationNodes that use them  
  * **NetworkNode** class  
    * General class that stores network based information in a model  
  * **BranchNode** class  
    * Stores edge information between NetworkNode types  
  * **SubstitionModel** class  
    * CalculationNode that helps other CalculationNodes when they need info about the Q matrix for GTR models  
  * **TaxonSet** class  
    * Holds naming and DataSequence information for each leaf

* ### PhyNetPy.ModelFactory

  * **ModelComponent** class  
    * Defines the general behavior and structure of a custom model component that can be used with the ModelFactory build process  
  * **NetworkComponent** class  
    * Class that is responsible for incorporating a Network object into a Model  
  * **MSAComponent** class  
    * Class that is responsible for incorporating an MSA object into a Model  
      * Dependent on NetworkComponent  
  * **SubstitutionModelComponent** class  
    * Class that is responsible for incorporating a GTR Substitution Model into the Model.  
      * Dependent on NetworkComponent  
  * **ANetworkNode** class  
    * Class that defines general behavior for model network nodes. Implement a subclass to define custom behavior.  
  * **ParameterComponent** class  
    * Class that is responsible for incorporating any parameter into the Model  
  * **ModelFactory** class  
    * Class that takes any number of ModelComponents, and builds them in the proper ordering to create a Model object. 

* ### PhyNetPy.ModelMove

  * **Move** class  
    * Defines general behavior for any custom move that makes changes to the Model object  
  * **AddReticulationMove** class  
    * Adds reticulation edge to a Model’s embedded Network  
  * **RemoveReticulationMove** class  
    * Removes reticulation edge  
  * **FlipReticulationMove** class  
    * Flips the destination and source of a reticulation edge  
  * **RelocateReticulationMove** class  
    * RemoveReticulation \+ AddReticulation in one move  
  * **RelocateReticulationSrcMove** class  
    * Changes the source node of a reticulation edge to a different node  
  * **RelocateReticulationDestMove** class  
    * Changes the destination node of a reticulation edge to a different node  
  * **BranchLength** class  
    * Changes the Branch Length of a given edge  
  * **PSPPMove** class  
    * Custom move for MP-Allop-2.0

* ### PhyNetPy.Search

  * **MetropolisHastings** class  
    * Using a Model and a ProposalKernel with moves that implement a Hastings ratio, run a Metropolis-Hastings search for a given number of iterations.  
  * **HillClimbing** class  
    * Using a Model and a ProposalKernel, run a Hill Climbing search for a given number of iterations  
  * **SimulatedAnnealing** class  
    * Using a Model and a ProposalKernel, run a Simulated Annealing search for a given number of iterations.  
  * **ProposalKernel** class  
    * A general class that implements a generate function that returns a Move that operates on a Model object. Craft a subclass to make custom proposal kernels.

# Phylogenetics Extras

* ### PhyNetPy.Alphabet

  * **Alphabet** class  
    * Provides implementation of various common alphabets for different data that maps characters to numbers, for use in a nexus file or Matrix object. (i.e. the SNP alphabet can be used to map “2002212” to \[2,0,0,2,2,1,2\] or the DNA alphabet can be used to map “AACT” to \[1, 1, 2, 4\]. More details are in the documentation that describe each standard alphabet).

* ### PhyNetPy.Simulations

  * **Yule** class  
    * Simulates random Networks (with no reticulations, so trees) up to a certain time or number of taxa given a birth rate.  
  * **CBDP** class (Constant rate Birth Death Process)  
    * Simulates random Networks (with no reticulations, so trees) up to a certain number of taxa given a birth and death rate.  
  * **LevelK** class  
    * Simulates random Networks via Yule or CBDP but adds reticulations at random and with random inheritance ratios until a level k network is achieved

* ### PhyNetPy.GTR

  * **GTR** class  
    * General Time Reversible substitution model, that serves as a superclass for all the rest of the special case substitution models.  
  * **JC** class  
    * Jukes Cantor ‘69  
  * **HKY** class  
    * Hasegawa–Kishono–Yano ‘85  
  * **K80** class  
    * Kimura ‘80  
  * **SYM** class  
    * Zharkikh ‘94  
  * **TN93** class  
    * Tamura-Nei ‘93  
  * **K81** class  
    * Kimura ‘81  
  * **F81** class  
    * Felsenstein ‘81

# Included Methods

* ### PhyNetPy.MPAllop

  * **MP\_ALLOP** function  
    * Runs the MPAllop method with a random starting network, given a set of gene trees and a subgenome mapping.  
  * **MP\_ALLOP\_BOOTSTRAP** function  
    * Runs the MPAllop method with a specified starting network, given a set of gene trees and a subgenome mapping.

* ### PhyNetPy.MCMC

  * **MCMC\_SEQ** function  
    * Runs MCMC chain with DNA data from random starting network.  
  * **MCMC\_SEQ\_BOOTSTRAP** function  
    * Runs MCMC chain with DNA data from specified starting network.  
  * **MCMC\_BIMARKERS** function  
    * Runs MCMC chain with SNP data from random starting network.  
  * **MCMC\_BIMARKERS\_BOOTSTRAP** function  
    * Runs MCMC chain with SNP data from specified starting network.