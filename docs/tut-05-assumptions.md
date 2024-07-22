
# Making assumptions

Let's take a second look at the example document below, which you saw already in
[the previous tutorial](tut-04-validation.md).
Why did Lurch put positive feedback on the second expression, but not the first?

<div class='lurch-embed' width='100%' height='300px' validate='true'>
Let's state the obvious.  First, we `assume x < 0`.

Then we can surely conclude (drum roll) that `x < 0`!
</div>

In mathematics, most facts are not proven in isolation, but only after making
certain *assumptions.*  A theorem will say, "If such-and-such a fact, then we
know some other facts."  This is why in a geometry class, many textbooks let a
student justify a line in a proof with the word "given."  Lurch has support for
this essential piece of mathematical reasoning.

## The user interface for assumptions

To make an expression into an assumption, you use a different technique
depending on which editing mode you prefer.  (Recall the three editing modes
introduced at the end of [an earlier tutorial](tut-03-meaningful-math.md).)

 * **In beginner mode,** there is a checkbox in the expression editing dialog
   that says "Assumption" and is unchecked by default.  Check it to make an
   expression into an assumption; leave it unchecked to have your expression
   treated as an ordinary statement.
 * **In intermediate mode,** the top of the expression editing dialog has a
   drop-down menu for choosing the kind of content you're inserting.  One of the
   options is "Assumption," in contrast to the default "Statement."  (There are
   many other options on that drop-down that we will come to in later tutorial
   pages.)
 * **In advanced mode,** you must include in the input you provide a word that
   signals that the content is an assumption.  For instance, instead of typing
   `x<0` into the dialog box, you can type `Assume x<0`.  For a full list of the
   words that signal "assumption," see the
   [Lurch Notation reference page](lurch-notation.md).

## Feedback about assumptions

Lurch checks your reasoning to see if any of the steps in it are invalid.  But
in mathematics, you're allowed to assume whatever you want.  (Some assumptions
are more useful or strategic than others, but no assumption is an example of
invalid reasoning.)  Consequently, Lurch does not mark assumptions as right or
wrong; it just doesn't mark them at all.  You can see this in the document shown
at the top of this page.

!!! note "Exercise: Make/break assumptions"

    1. Edit the document at the top of this page.  Change the first expression
       so that it is no longer an assumption, and ask Lurch to check your
       reasoning.
    2. Does its response make sense to you?  (If not, see the explanation
       below.)
    3. Try toggling the "assumption" status of that same expression using the
       other editing modes as well (beginner, intermediate, and advanced).

## Keeping mistakes local

When your document has two copies of the expression $x<0$, and neither one is
marked as an assumption, Lurch grades the first one as unjustified and the
second one as justified.  The reason for this is that Lurch does not propagate
your errors throughout your document, but tries to keep them as contained as
possible.  To explain this better, consider the following example.

!!! example

    Betsy is a geometry student who wrote a 10-line proof and submitted it for
    homework.  All the work is correct, except for line 4, which is not properly
    justified.  How many points does Betsy get for this homework problem?

Perhaps some geometry teachers would give Betsy 9 out of 10 points, because 9
lines were correct and 10 were incorrect.  Perhaps other teachers would give her
3 out of 10 points, because the first 3 lines were correct, but everything after
that is suspect, because lines 5-10 might rely on the invalid line 4.

Lurch tries to be as generous as possible.  **If one of your statements is not
sufficiently justified, Lurch marks it as such, but later statements are still
free to rely on the unjustified one.**  Thus a proof with even one unjustified
statement is not a complete proof, even if all the statements but one have green
check marks on them.

## Why is Lurch so nice?

We chose to have Lurch behave this way because it permits students to assemble a
proof in any order.  For example, many instructors teach students to work "from
the outside in," building some of the starting lines and some of the concluding
lines for a proof, before filling in one or two insightful steps in the middle
that connect it all together.  For example, we will later see examples of proofs
like the following, and Lurch will grade most of the work as correct.

!!! example

    Let $x$ be arbitrary, then assume $x>0$.  Consequenly, $x^2+1>0$.

    (Here's the part I need to fill in before submitting my homework!)

    My goal is to show that $x^2+k>p$.  Once I've shown that, I can conclude
    that for any $x>0$, $x^2+k>p$.

In such a proof, Lurch will mark every statement other than the first $x^2+k>p$
correct, because *only that one line* is missing its justification.  This allows
students to get positive feedback about their work en route to a complete proof,
even if they don't choose to write it in the order it will eventually be read.

## Speaking of proofs...

...we haven't actually done any yet!  [Let's do a proof now!](tut-06-environments.md)
