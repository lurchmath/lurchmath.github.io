
# The Lurch Project

***Lurch* is a word processor designed to check the reasoning in proofs,
specifically the types of proofs that students do in an introduction to proofs
course.**

Its purpose is to give immediate and helpful feedback about whether a student is
doing their proof correctly, so that the student learns the mechanics and rules
of proof writing more quickly and thoroughly than if they had to wait days for
manually graded feedback.

## Current status

The latest version of Lurch is a web application that is in alpha testing at the
moment.  [You can try it online here!](http://lurchmath.github.io/lurchmath)
A simple example proof in propositional logic is shown below.

<div class='lurch-embed' width='100%' height='500px' validate='true'>

<div class='header'>
We tell Lurch which symbols our mathematical system requires like this:
`Declare and, or, implies, not`.

<rule>
**Conjunction introduction:**
`If A` and `if B` then we can conclude `A and B`.
</rule>

<rule>
**Conjunction elimination:**
`If A and B` then we can conclude `A` and separately conclude `B`.
</rule>

<rule>
**Disjunction introduction:**
`If A` then we can conclude `A or B`, conclude `B or A`, or even both.
</rule>

<rule>
**Disjunction elimination:**

<subproof>
(Version 1)  `If A or B` and `not A` then it must be `B`.
</subproof>
<subproof>
(Version 2)  `If A or B` and `not B` then it must be `A`.
</subproof>
</rule>

<rule>
**Conditional introduction:**

To prove a conditional, we must construct a subproof of the following form.
<premise>
`Assume A`.  Then, typically after some work, prove `B`.
</premise>
From that subproof, we can conclude `A implies B`.
</rule>

<rule>
**Conditional elimination:**

`If A implies B` and `if A`, then we can conclude `B`.
</rule>

<rule>
**Negation introduction:**

<premise>
If we start a subproof with "`assume A`" and we end it with a contradiction,
say `B` and `not B`, then we can end the subproof...
</premise>
...and conclude `not A`.
</rule>

<rule>
**Negation elimination:**

<premise>
If we start a subproof with "`assume not A`" and we end it with a contradiction,
say `B` and `not B`, then we can end the subproof...
</premise>
...and conclude `A`.
</rule>
</div>

<theorem>
**Contrapositive:** `If X implies Y` then `not Y implies not X`.
</theorem>
<proof>
`Assume X implies Y`.  To establish the contrapositive, we must use a subproof.
<subproof>
`Assume not Y`.  The easiest way to show $\neg X$ is with an inner subproof.
<subproof>
`Assume X`.  Then we can apply the original assumption to conclude `Y`, but we
already know that `not Y` is true.  That's a contradiction.
</subproof>
So outside that inner subproof, we can conclude `not X`.
</subproof>
Since we assumed $\neg Y$ and proved $\neg X$ from it, we can conclude
`not Y implies not X`.
</proof>
</div>

## Lurch Sites

 * [What is a Lurch Site?](what-is-a-lurch-site.md)
 * [Gallery of Lurch Sites](lurch-sites-gallery.md)
 * [How to create a Lurch Site](how-to-create-a-lurch-site.md)

## Documentation

!!! warning

    We are *just beginning* to write documentation, but you can
    [find a tutorial online here](tutorial-toc.md).
    New bug fixes, new features, and new documentation arrive almost every day.
    Expect a more stable release in late spring of 2024.

Potential new contributors can check out
[the new app's GitHub repository here](http://www.github.com/lurchmath/lurch).

## Other tools

 * [The Lurch Deductive Engine (LDE)](http://github.com/lurchmath/lde) is the
   set of data structures and algorithms used under the hood to validate proofs
 * We may later incorporate
   [this JavaScript implementation](http://lurchmath.github.io/earley-parser)
   of the [Earley parsing algorithm](https://en.wikipedia.org/wiki/Earley_parser)
   to allow users to customize the notation used in the app, but that remains
   uncertain.
 * Old versions of our work are archived [here](old-versions.md).
