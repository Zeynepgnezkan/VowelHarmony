library(tidyverse)
library(readxl)


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



