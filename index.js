let btn = document.getElementById('btn');
let output = document.getElementById('container');
let quote =
[
    
    '“Codez toujours comme si la personne qui allait maintenir votre code était un violent psychopathe qui sait où vous habitez.“ -  John Woods',
    '“Mesurer la progression du développement d’un logiciel à l’aune de ses lignes de code revient à mesurer la progression de la construction d’un avion à l’aune de son poids.“ -  Bill Gates',
    '“Neuf femmes ne peuvent pas faire un bébé en un mois.“ - Fred Brooks',
    '“Mal nommer les choses, c’est ajouter au malheur du monde.“ - Albert Camus',
    '“There are only two hard things in Computer Science: cache invalidation and naming things.“ – Phil Karlton',
    '“Célébrer le succès, c’est bien, mais il est plus important de tirer les leçons de l’échec.“ - Bill Gate',
    '“ Parfois, quand vous innovez, vous faites des erreurs. Il est préférable de les admettre rapidement, et se concentrer sur l\'amélioration de vos autres innovations. “ - Steve Job',
    '“ Soyez un repère de qualité. Certaines personnes ne sont pas habituées à un environnement où on s’attend à l\'excellence.“ - Hal Abelson',
    '“Je pense que c’est le meilleur conseil : réfléchissez constamment à la façon dont vous pourriez mieux faire les choses, et vous remettre en question.“ - Elon Musk',
    '“Si vous vous levez le matin en pensant que l’avenir sera meilleur, c’est une journée ensoleillée. Sinon, ce n’est pas le cas.“ - Elon Musk',
    '“Les gens devraient poursuivre ce qui les passionne. Cela les rendra plus heureux que n’importe quoi d’autre.“ - Elon Musk',
    '“La persévérance est très importante. N’abandonnez jamais à moins d’y être obligé.“ - Elon Musk',

]

btn.addEventListener('click', function(){
    let randomQuote = quote[Math.floor(Math.random()* quote.length)]
    output.innerHTML = randomQuote;
})