
# Real mathematics, part 1

## Well, okay, propositional logic, but real proofs!

One of the early topics in some introduction to proof courses is logic, often
starting with propositional logic.  You may have noticed the example proof below
(in propositional logic) on [the documentation home page](index.md).

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

## The rules are in the header

As discussed in [the previous tutorial page](tut-08-document-header.md), the
mathematical system being used is hidden in the document header, so that it does
not clutter up the document.  But you can view it with the Document menu, and
the first item, "Edit document header in new window."

!!! note "Exercise: Read the logical rules"

    Take a look at how the rules for propositional logic are defined in Lurch,
    by viewing the document header as described above.  You may notice:

     1. It begins by declaring some symbols.  If this is unexpected, refer back
        to [a page for instructors](tut-07b-metavariables.md) from earlier in
        this tutorial.
     2. Each rule of logic is an environment of type "Rule."  That has several
        implications, including that Lurch will not check the reasoning inside
        of it, but just accept that all substitution instances of it are valid
        types of inference.
     3. Recall that only the content inside blue expression bubbles is used for
        checking reasoning, so a lot of the text in the header is just for
        expository purposes only, including the name of each rule, and the
        explanatory text connecting its premises to its conclusion.
     4. For rules that expect one to build a subproof before using them (e.g.,
        the rule for conditional introduction), the rule contains an environment
        called a "Premise," which means that the user of the rule must build a
        subproof shaped like that environment in order to use the rule.

## Theorems and proofs

Just as LaTeX contains theorem environments and proof environments, so does
Lurch.  And just as LaTeX theorem environments are where you place the
*statement* of your theorem, and LaTeX proof environments are where you place
the *proof* of your theorem, they function the same way in Lurch as well.  If
you examine the document above, which contains one theorem and its proof, you
will see this pattern holds there.

Let's try constructing a new theorem-proof pair in the same document, below the
one that's already there, and proving a new fact.  **Yes, let's prove your first
theorem in Lurch!**

!!! note "Exercise: Create a theorem-proof pair"

     1. Place your cursor at the very bottom of the document in the editor
        above.  It will be *inside* the proof, just before its end.
     2. Press enter.  Uh-oh!  Lurch assumed you wanted to add new content
        inside the proof.  That's not what we want.
     3. Use the Insert menu to add an "Empty paragraph below" the proof (or use
        the keyboard shortcut you find there).
     4. Now that we have space to insert a new theorem, use the Insert menu,
        choose Environment, and pick "theorem" from the list of options.  Click
        OK.
     5. You should see a new, empty Theorem in your document.  Leave it empty
        for now.
     6. Repeat the same steps as above to create an empty proof after your
        theorem.  (You'll need to Insert > Empty paragraph below again.)

!!! warning "Tip: Use shortcuts"

    Just like in LaTeX, Lurch knows about some shortcuts, triggered by the
    backslash (`\`) key.  For example, instead of using the Insert menu to add a
    proof, you could type `\proof`, and it would offer to insert one for you.

    In fact, as soon as you type `\p`, it's already offering to insert a proof,
    and you can just press Enter to accept.

## Stating a basic theorem

!!! note "Exercise: A theorem without a proof"

    Try entering the following theorem into your empty Theorem environment:
    **If $X\text{ and }Y$ then $Y\text{ or }Z$.**

!!! warning

    It is essential for you to mark the first expression as an assumption and
    the second as a statement!  For a reminder on how to distinguish those two
    things, refer back to
    [an earlier page in this tutorial](tut-05-assumptions.md).

What happens if you ask Lurch to check your work at this point?  The theorem
does not yet have a proof, but it gets a green check mark anyway!  The reason is
that this theorem is so obvious that Lurch can tell it's true just from trivial
applications of the rules of logic, without the user's help.

This is actually a downside if you're teaching propositional logic!  But don't
worry.  Future versions of Lurch will have customizable levels of helpfulness,
so that the software doesn't do "too much" on the student's behalf.  Right now,
however, we have just one setting, and that's Lurch at maximal helpfulness.

## What did we learn?

We learned how to state theorems and build empty proofs!

[Let's move on to a theorem that's tricky enough we actually have to prove it.](tut-09b-real-math.md).