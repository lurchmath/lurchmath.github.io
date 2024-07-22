
# Adding mathematical content

The simplest way to enter mathematical content into Lurch is to use an equation
editor (powered by [MathLive](https://cortexjs.io/mathlive/)).  For users who
are familiar with LaTeX, we have that option as well, but let's start with the
simpler method.

!!! note "Exercise: Add some math"

    1. In the Lurch application below, click the Insert menu and choose
       "Expository math."
    2. In the dialog that pops up, enter some math using the equation editor.
       For example, you might type `1-x^2` and watch it become $1-x^2$.
    3. Click OK to place your math into the document.

<div class='lurch-embed' width='100%' height='300px'>
</div>

## Editing math you've added

To later edit your new mathematical expression, you can either

 - click the expression or
 - move your cursor over the expression with the arrow keys on the keyboard
   (which will highlight the expression) and then press Enter on the keyboard.

Both options open the same dialog box you had when adding the math, but now for
editing it instead.

## Is Lurch grading my math?

Not yet!  We're just getting started.
[Let's learn how to input *meaningful* math.](tut-03-meaningful-math.md)

---

## Optional: LaTeX

Users familiar with LaTeX may want to use that notation instead of an equation
editor.  (Other users can skip this section.)  We have a setting that lets you
choose the type of interface you would like.

 - **Beginner mode** is the equation editor you saw in the exercise above.
 - **Intermediate mode** shows a LaTeX input box and the equation editor, and
   you can use either one, and they stay in sync.
 - **Advanced mode** shows only the LaTeX input box and a typeset preview, with
   minimal styling.

The syncing of LaTeX and the equation editor in intermediate mode is useful in
two ways.  For those who type LaTeX, it's nice to see a live preview, to be sure
that you have typed what you intended.  For those who use the equation editor,
it provides a simple way to learn the corresponding LaTeX syntax, if the user
wants to do so.

!!! note "Exercise: Change the input mode"

    1. In the Lurch application above, click the Edit menu and choose the
       Preferences item (at the very bottom, which may require you to scroll).
    2. Find the setting for "Type of expository math editor to use" and change
       it to "Intermediate."
    3. Click OK to save your settings.
    4. Repeat the exercise at the top of this page to try out the new
       intermediate-mode editor you just enabled for expository math content.
    5. Try this exercise again, but use Advanced mode.
    6. Once you've tried them all, switch the setting to the one prefer.

See the link above the line to proceed to the next tutorial.
