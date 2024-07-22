
# How substitution works in Lurch

!!! warning "Warning: Fiddly details of interest to rule authors"

    This page of the tutorial is a bit of a rabbit trail into some subtleties of
    how Lurch functions, but should be of interest to anyone who wants to define
    a new mathematical system in Lurch from the ground up.

    We aim to provide several such systems pre-built for users eventually, and
    some appear already in our [gallery](lurch-sites-gallery.md), but for those
    who are interested in writing their own mathematical systems, this content
    is relevant.

    **In particular, no student needs to read this page.**  (But they can!)

## We know where to substitute, and where not to

Mathematicians and our students develop a sense for which parts of a theorem or
axiom are "for substitution" and which are not.  For example, consider the
following basic fact from Euclidean geometry.

!!! example "Theorem"

    In a triangle with angles $\alpha$, $\beta$, and $\gamma$,
    measured in radians, we have $\alpha+\beta+\gamma=\pi$.

Working in mathematics, we understand that if you later come to an isosceles
triangle with angles measuring $a$, $a$, and $b$ radians, respectively, you can
conclude that $a+a+b=\pi$, because we used the above theorem and substituted
$\alpha=a$, $\beta=a$, $\gamma=b$.

But it's understood that the *only* symbols you're allowed to substitute in for
are $\alpha$, $\beta$, and $\gamma$.  That is, the $\pi$ (despite being another
lower-case Greek letter) is not available for substitution.  You can't have the
sum of the triangle's angles equal to whatever you want!  Perhaps more subtly,
the $+$ and $=$ are other mathematical symbols, and we're not allowed to
substitute for them, either.  Otherwise, the theorem above would begin to say
all manner of unexpected things, such as $a-b-c>0$, which is clearly not the
intent.

So how is it that we know intuitively which symbols are implicitly universally
quantified and which are not?  There are no universal quantifiers on the above
theorem, so nobody explicitly told us that $\alpha$, $\beta$, and $\gamma$ were
the ones you can replace.

More importantly, how is software like Lurch to make the decision, since it does
not have human intuition to guide it?

## Metavariables

In logic, we use the term *metavariable* to mean a symbol in a metalanguage that
can be replaced by any expression in an object language.  Since Lurch is a piece
of software in which you can design and use many different logical systems, the
method of substitution provided in the software is like that of a metatheory
that exists outside of any one particular mathematical topic you might choose to
define in it and use it to reason about.  So the question we're asking in this
page of the tutorial is:  **How does Lurch decide, when looking at a theorem,
axiom, etc., which symbols in it are metavariables and which are not?**

The answer is that Lurch requires you, before you state a theorem, axiom, or
similar construct, to declare all of the symbols that you do *not* want to be
treated as metavariables.  Returning to the example at the top of this page,
the symbols $+$, $=$, and $\pi$ have pre-existing meanings, so that they are not
to be allowed to be used for substitution.  In Lurch, this would mean that you
should declare these special symbols before the statement of the theorem, so
that Lurch knows that they have a set meaning and can never be metavariables.

Let's see how this works in practice.

## Doing it the wrong way

The following Lurch document defines one simple rule from propositional logic,
but that rule does *not* behave the way we intend, the way that matches our
intuition.  (Don't worry; we will fix it in the next section.)  The reason for
the problem is that we have not declared *any* symbols, and thus *every* symbol
in the declared rule functions like a metavariable.  Notice the erroneous
inference in the document below.

<div class='lurch-embed' width='100%' height='400px' validate='true'>
<rule>
**Erroneous conjunction introduction rule:**
`Assume A` and `assume B`.  Then `A and B`.
</rule>

Now `assume X` and `assume Y`, and we will use the above rule twice, once to
conclude `X and Y` and once to conclude `X+Y`.  Oh no!
</div>

What went wrong?  Recall that this Lurch document has not imported *any*
mathematical concepts, and thus it is building a mathematical system from the
ground up.  Consequently, words we would expect to have a meaning, such as "and"
do not have *any* special meaning.  Thus the word "and" in the rule defined
above functions just like the $A$ and $B$ do; it's a variable and you can
substitute another operator in for it.

Since this is almost certainly not the intended meaning of the rule, we can fix
it as follows.

## Doing it the right way

Just start the document by saying that "and" is a symbol that's part of the
mathematical system we're building, and thus has a fixed meaning.  You do this
with the special word "declare."

<div class='lurch-embed' width='100%' height='400px' validate='true'>
`Declare and`, so that it now has a fixed meaning.

<rule>
**The same rule from earlier, no longer erroneous:**
`Assume A` and `assume B`.  Then `A and B`.
</rule>

Now `assume X` and `assume Y`, and we can still use that rule to conclude
`X and Y`, but we can no longer use it to conclude `X+Y`.  Great!
</div>

**In short:  Lurch treates *every* symbol as a metavariable, unless you
explicitly "declare" it first.**

## Off the rabbit trail

If you got to this page from [the rules page of the tutorial](tut-07-rules.md),
you probably want to go back to
[the next page in the tutorial](tut-08-document-header.md).
