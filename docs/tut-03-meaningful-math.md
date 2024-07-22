
# Meaningful mathematics

## Two types of mathematical content

Lurch allows users to type math in two ways:

 * ***meaningful math,*** which the user wants Lurch to read and grade, giving
   feedback about its correctness; and
 * ***expository math,*** which the user wrote to give some intuition for a human
   reader of their work, but which Lurch should ignore.

In the [previous tutorial page,](tut-02-expository-math.md) we entered only
expository math, not meaningful math.  If we asked Lurch to check our work, it
would give us no feedback at all, because it knows to ignore content we've
explicitly called "expository."

## Why two types of math?

Students will almost always want to use meaningful math, so that Lurch will read
and grade all of their work.  But instructors may want to enter a mix of
meaningful and expository math, and students who want to add exposition to their
proofs may do so as well.

For example, if an instructor is defining a new set of axioms, and they want to
intersperse examples that explain the axioms, they don't want Lurch to
misinterpret the examples as axioms, or as student work to be graded.  (The
instructor might even give examples of what you *can't* do with the axioms!)
So they would use meaningful math for the axioms, but expository math for the
examples.

!!! note "Exercise: Meaningful math"

    1. In the Lurch application below, click the Insert menu and choose
       "Expression."
    2. In the dialog that pops up, type a simple expression, like $x<0$.
    3. Click OK to place your math into the document.

<div class='lurch-embed' width='100%' height='400px'>
</div>

To edit your new content, you have the same options as you did for
[expository math](tut-02-expository-math.md); you can click it or place your
cursor on it and hit enter.

!!! danger "Important: Recognizing meaningful content"

    You may have noticed that the expression you just added is in an orange
    font.  **This color distinguishes meaningful content from non-meaningful
    content, and makes it clear which expressions in your document Lurch is
    paying attention to.**  We'll talk more about this (and how to hide it when
    you don't want to see it) in later parts of this tutorial series.

## Lurch Notation

Just as expository math expressions can be entered using an equation editor *or*
LaTeX notation, meaningful mathematics can also be entered in more than one way.

!!! note "Exercise: Change the input mode"

    1. In the Lurch application above, click the Edit menu and choose the
       Preferences item (at the very bottom, which may require you to scroll).
    2. Find the setting for "Type of expression editor to use" and change
       it to "Intermediate."
    3. Click OK to save your settings.

Much like intermediate mode for editing expository math content allows you to
use the equation editor or LaTeX notation, the intermediate mode for editing
meaningful math expressions allows you to use the equation editor or *a custom
Lurch Notation for meaningful expressions.*

!!! warning "Warning: This is not LaTeX"

    LaTeX was designed for presentation, not meaning.  The notation used for
    meaningful expressions in Lurch is not LaTeX, but a derivative of AsciiMath
    specific to the Lurch project.  We hope to make this notation customizable
    in a future version of Lurch, but in this early phase of the project it is
    not.  [You can read more about the Lurch notation here.](lurch-notation.md)
    Or you can choose to use the equation editor instead.

Like expository math, meaningful math has three editor modes, and you can
choose the one you like best:

 - **Beginner mode** is the default mode and uses just an equation editor widget.
 - **Intermediate mode** incorporates both the equation editor for those who
   wish to use it and a text box that uses [Lurch Notation](lurch-notation.md).
 - **Advanced mode** is for those who have mastered Lurch Notation, and shows a
   very minimalist dialog that aims to let you stay in the flow of your work.

## Is lurch grading my math *now?*

No, but that's the very next thing!
[Learn how to have Lurch grade your document.](tut-04-validation.md)
