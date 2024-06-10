

VH_manolo = read.csv("new_1/new_data_VH_36.csv", sep=";", header=T)

library(tidyverse)
library(ggdist)

VH <- subset(VH_manolo, VH_manolo$word_cond == "word")



VH$tr=1000*VH$key_respTest.rt



VHtr=subset(VH, tr > 250 & key_respTest.corr==1)
VHtrH=subset(VHtr, isHarmonic=="harmonic")
VHtrDH=subset(VHtr, isHarmonic=="notharmonic")
mean(VHtrH$tr)
mean(VHtrDH$tr)

p <- ggplot(VHtr, aes(x = tr, color = factor(isHarmonic))) +
  geom_density() +
  labs(
    x = "Reaction Time",
    y = "Density",
    title = "Reaction Time Distribution by Condition"
  ) +
  theme_minimal()
p
