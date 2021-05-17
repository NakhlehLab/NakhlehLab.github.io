---
layout: post
title:  "G-XRF tutorial"
date:   2021-05-17 09:00:00 -0500
categories: xenoplasy
---

# Introduction

The [Global Xenoplasy Risk Factor][wang-2021] (G-XRF) is a measure of risk for
whether introgression has contributed to the evolution of a **particular trait
pattern**. The model for introgression is the
[Multispecies Network Coalescent][yu-2014] (MSNC), It was inspired by the
[Hemiplasy Risk Factor][guerrero-2018] (HRF), which is a measure of risk for
whether incongruence of trait patterns in relation to a **particular branch**
is due to hemiplasy.

The G-XRF is calculated as a odds ratio of a species network with or without
the reticulation of interest, given the particular trait pattern. For example,
given the below network, the G-XRF is equal to the posterior probability of
the full network divided by the posterior probability with the same network
where the branch with inheritance probability γ removed. The latter
probability can also be calculated by setting that γ to zero.

![Example species network](/assets/wang-2021-figure-1.jpg)

In this case, removal of the γ branch produces one of the displayed trees of
the network. For more complex species networks with multiple reticulations,
removal of a single branch to calculate the XRF for that specific
introgression event would be comparing two networks rather than a network and
a tree.

Unnormalized posterior probabilities for any species network or tree may be
calculated using the [`MCMC_BiMarkers`][zhu-2018] method in
[PhyloNet][wang-2018]. This method generalizes the `SNAPP` method for
biallelic marker inference of species trees to species networks. Unnormalized
posterior probabilities omit the marginal likelihood, but since we are going
to compute the ratio of posterior probabilities, the marginal likelihoods will
cancel out. We therefore can - and in this tutorial we will - use
`MCMC_BiMarkers` to compute the G-XRF for some exemplary scenarios.

# Network vs tree

For the first scenario, we will simply calculate G-XRF for a network compared
with a tree.

[wang-2021]: https://doi.org/10.1101/2020.09.16.300343
[yu-2014]: https://doi.org/10.1073/pnas.1407950111
[guerrero-2018]: https://doi.org/10.1073/pnas.1811268115
[wang-2018]: https://doi.org/10.1093/sysbio/syy015
[bryant-2012]: https://doi.org/10.1093/molbev/mss086
[zhu-2018]: https://doi.org/10.1093/bioinformatics/bty295
