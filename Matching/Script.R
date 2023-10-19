
library(readr)
library(tidyverse)
library(readxl)
library(LexOPS)

LexOPS::run_shiny()

Words <- read_excel("vowel_hormony_matching.xlsx")


df_1 <- Words %>%
  subset(is.na(suff)) %>%
  mutate(Diac_yes = grepl("i|ü|ö|ğ|ş|ç", Words, ignore.case = TRUE),
         Diac_no = grepl("ı|u|o|g|s|ç", Words, ignore.case = TRUE),
         Both = grepl("i|ü|ö|ğ|ş|ç", Words, ignore.case = TRUE) & grepl("ı|o|u|g|s|c", Words, ignore.case = TRUE))


writexl:::write_xlsx(subset_df, "subset_df.xlsx")
df_1$dia_cond <- NA
for(i in 1:nrow(df_1)){
  if(df_1$Both[i] == TRUE){
    df_1$dia_cond[i] <- 2
  }else{
    if(df_1$Diac_yes[i] == TRUE){
      df_1$dia_cond[i] <- 3
    }else{
      if(df_1$Diac_no[i] == TRUE){
        df_1$dia_cond[i] <- 1
      }
    }
  }
}#end fun
df_1 <- df_1[!is.na(df_1$dia_cond),]
df_1$FirstLetter <- substr(df_1$Words, 1, 1)
df_1$FirstLetterNumeric <- sapply(df_1$FirstLetter, function(x) utf8ToInt(x) - utf8ToInt("a") + 1)


colnames(df_1)
# Generation
hist(Words$logFreq)

Words <- read_excel("vowel_hormony_matching.xlsx")

Words$harm_cond <- ifelse(Words$isHarmonic == "harmonic", 1,0)
table(Words$isHarmonic)

stim <- Words %>%
  set_options(id_col = "Words") %>% 
  split_by(logFreq, 10:11 ~ 11:16) %>% # split two group as high-low freq
  #control_for_map(stringdist, Words, 1:3, name="orth_dist", method="lv") %>% # generates orthographically similar
  #control_for_map(stringdist, Words, 1:1, name="phon_dist", method="lv") %>% # generates phonologically similar
  control_for(length, 0:0) %>% # no variation for word length
  control_for(harm_cond, 1:1) %>%
  generate(90)

colnames(Words) <- c("A1", "Freq","Freq2", "Type","length","logFreq","isHarmonic","harm_cond") 
stim<- inner_join(stim, Words, by="A1",na_matches = "na")
colnames(stim) <- c("item_nr","A1","A2","match_null","Freq_A1","Freq2_A1", "Type_A1","length_A1","logFreq_A1","isHarmonic_A1","harm_cond_A1") 
colnames(Words) <- c("A2", "Freq","Freq2", "Type","length","logFreq","isHarmonic","harm_cond") 
stim<- inner_join(stim, Words, by="A2",na_matches = "na")
colnames(stim) <- c("item_nr","A1","A2","match_null","Freq_A1","Freq2_A1", "Type_A1","length_A1","logFreq_A1","isHarmonic_A1","harm_cond_A1",
                    "Freq_A2","Freq2_A2", "Type_A2","length_A2","logFreq_A2","isHarmonic_A2","harm_cond_A2")

stim <- stim[ , -which(names(stim) %in% c("match_null","harm_cond_A2","harm_cond_A1",
                                          "Type_A1","Type_A2"))]
stim3 <- stim
stim2 <- stim
stim1 <- stim
x<-inner_join(stim2, stim1, by="A1",na_matches = "na")
y<-inner_join(stim2, stim1, by="A2",na_matches = "na")

writexl:::write_xlsx(All_words, "All_words.xlsx")
