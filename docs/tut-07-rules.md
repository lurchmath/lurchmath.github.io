
# Reading and using rules

## Lurch starts out empty

Consider the following simple bit of mathematics, which Lurch does *not*
consider to be a valid inference.  What could possibly be going on?

<div class='lurch-embed' width='100%' height='300px' validate='true'>
`Assume x < 0`.  Then surely `x < 10`.
</div>

The reason Lurch does not grade this as correct is because, by default, Lurch
has *absolutely no meaning for any mathematical symbols loaded.*  In other
words, Lurch does not assume any particular meaning for symbols like $<$ or $0$
or $10$.  

If you want it to know how those symbols operate, you have to load in a
mathematical library that defines them.  Then those symbols will behave in the
expected way.  (Of course, that depends on which mathematical definitions appear
in the library you load!)

## Add meaning with rules

In order for Lurch to permit new inferences that don't hold by default, we must
give it new facts.  These come in the form of new **Rules** or **Axioms.**  In
practice, a rule and an axiom behave exactly the same in Lurch, but typically
if you're building a logical system, you form it out of "rules," and if you're
building a mathematical theory, you form it out of "axioms."  But in Lurch
documents, we will always use the word "rule" for new facts that Lurch should
accept as valid.

Let's take the document above and add some facts that will help us get the
conclusion we're hoping for.

<div class='lurch-embed' width='100%' height='500px' validate='true'>
<rule>
The less than operation is transitive.  Specifically, if we
`assume a < b` and we `assume b < c` then we can conclude `a < c`.
</rule>

<rule>
`0 < 10`
</rule>

Now we should be able to get the conclusion we want:

If we `assume x < 0` then we can conclude that `x < 10`.
</div>

## Checking your reasoning with rules

Notice that rules in Lurch do not get checked.  You can make *whatever you
like* into a rule, and Lurch will not argue with you.

!!! note "Exercise: Even more transitive"

    Add a new assumption to the end of the document immediately above, that
    $10 < x^2$.  After that assumption, conclude that $x < x^2$.
    
    Now delete the expression that says $x < 10$.  Does Lurch still grade your
    final conclusion of $10 < x^2$ correct?

The exercise above shows that Lurch can fill in some basic steps of reasoning.
(Obviously it can't fill in too many missing steps, or it would be an automated
theorem prover, and that's not its goal.)  But in this case, it was able to fill
in the missing $x < 10$ that you deleted, and use it to complete the chain of
reasoning.

If you're an instructor and you're worried that perhaps Lurch is too forgiving,
filling in steps that students ought to have to write down to show that they
know what they're talking about, fear not.  We aim to make Lurch's intelligence
customizable, so that you can choose how many steps (if any) it will let the
user skip.  But that feature is still to come.

## Where to go from here?

There are two possible next steps.  If you want to dive into the nitty gritty of
how rules are defined, you can step off onto a rabbit trail about
[why the rule shown above is actually wrong](tut-07b-metavariables.md).
But if you just want to move along with the main tutorial, check out
[how to hide and show rules to make documents more compact](tut-08-document-header.md).
