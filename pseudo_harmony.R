library(tidyverse)
library(readxl)
library(vwr)

Words <- read_excel("Matching/with_pseudo.xlsx")


df1 <- Words %>%
  mutate(harmonic_p = grepl("a|o|ı|u", Pseudo, ignore.case = TRUE) & !grepl("e|i|ö|ü", Pseudo, ignore.case = TRUE) | 
           grepl("e|i|ö|ü", Pseudo, ignore.case = TRUE) & !grepl("a|ı|o|u", Pseudo, ignore.case = TRUE),
         notharmonic_p = grepl("a|o|ı|u", Pseudo, ignore.case = TRUE) & grepl("e|i|ö|ü", Pseudo, ignore.case = TRUE) | 
           grepl("e|i|ö|ü", Pseudo, ignore.case = TRUE) & grepl("a|ı|o|u", Pseudo, ignore.case = TRUE)) %>%
  mutate(harmonic_p = ifelse(harmonic_p, "harmonic",NA),
         notharmonic_p = ifelse(notharmonic_p,"notharmonic","NA")) %>%
  mutate(isHarmonic_p = coalesce(harmonic_p, notharmonic_p)) %>%
  select(-notharmonic_p,-harmonic_p)
writexl:::write_xlsx(df1, "Words_with_pseudo_harmony.checked.xlsx")

All_words <- read_excel("Words_with_pseudo_harmony.checked.xlsx")
Corpus <- read_excel("Tur.Freq.3.Hun.xlsx")

# Convert the column to a list
All_list <- as.list(All_words$Pseudo)
Corpus_list <- as.list(Corpus$Word)

old20_p<- old20(All_list,Corpus_list)

Matched_old <- data.frame(Pseudo = names(old20_p), old20_p = unname(old20_p))

All_words <- All_words %>% left_join(Matched_old,by = "Pseudo")

writexl::write_xlsx(All_words,"Words_with_pseudo_old20.checked.xlsx")

