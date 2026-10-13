# Esercizitazione javascript

## Traccia
  Obiettivo
  due variabili che cambiano a ogni giro.

  Il metodo
Scrivi i due numeri affiancati: a a sinistra, b a destra.
A ogni riga raddoppia il numero di sinistra e dimezza quello di destra, scartando il resto della divisione (21 → 10 → 5 → 2 → 1).
Ti fermi quando il numero di destra arriva a 0.
Tieni solo le righe in cui il numero di destra è dispari e somma i corrispondenti numeri di sinistra: il risultato è a × b.

  Esempio: 13 × 21
  
  sinistra  destra
  13        21   dispari → conta
  26        10
  52         5   dispari → conta
  104        2
  208        1   dispari → conta
  

  13 + 52 + 208 = 273

  Cosa devi scrivere
  Una funzione moltiplicazioneEgizia(a, b) che riceve due interi maggiori o uguali a 0 e restituisce il loro prodotto.
  
Non usare l'operatore * tra a e b (per raddoppiare puoi usare x + x).
Non modificare direttamente i parametri: lavora su copie.

  Test da eseguire con console.log
moltiplicazioneEgizia(13, 21) → 273
moltiplicazioneEgizia(7, 1) → 7
moltiplicazioneEgizia(5, 0) → 0
moltiplicazioneEgizia(0, 9) → 0
Controlla anche che il risultato sia uguale a a * b per qualche coppia a tua scelta.

  Bonus
  Stampa la tabella con console.log, una riga per passo, indicando quali righe vengono sommate.