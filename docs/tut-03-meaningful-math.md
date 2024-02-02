
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

Students will almost always want to use meaningful math only, so that Lurch
will read and grade all of their work.  But instructors may want to enter
a mix of meaningful and expository math.

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

## Important details about expressions

You have surely noticed that the expression you just added is surrounded in
a blue-ish border.  This border distinguishes meaningful content from
non-meaningful content, and makes it clear which portions of your document Lurch
is paying attention to.  We'll talk more about this decoration (and how to hide
it when you want to) later.

To edit your new content, you have the same options as you did for
[expository math](tut-02-expository-math.md); you can click it or place your
cursor on it and hit enter.

When adding or editing math expressions, you are not restricted to using only
the equation editor.  Under the Edit menu, find the Preferences option (all the
way at the bottom---you may need to scroll down).  In its "Math content" tab,
you can select which type of expression editor to use, from these options:

 - Beginner: the default you used above, a standard equation editor widget
   (thanks to the open-source tool [MathLive](https://cortexjs.io/mathlive/))
 - Intermediate: incorporates both the equation editor for those who wish to use
   it and a text box that uses a special *Lurch notation.*  That notation is
   [partially documented here](lurch-notation.md).
 - Advanced: for those who have mastered Lurch notation, a minimalist dialog
   that lets you stay in the flow of your document

## Is lurch grading my math *now?*

No, but that's the very next thing!
[Learn how to have Lurch grade your document.](tut-04-validation.md)
