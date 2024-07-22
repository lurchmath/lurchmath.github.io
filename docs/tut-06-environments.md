
# Creating and using environments

The very tiny Lurch documents we've seen so far are just to get us started.
They are not, of course, representative of real work with the application.
Typical mathematical documents will contain multiple theorem statements and
their corresponding proofs, possibly with other content as well, such as
explanations in between the theorems.

## The need for environments

We therefore need a way to express when a proof begins and when it ends,
as well as where theorem statements begin and end.  We do this with a feature
called *environments.*

Consider the document below, which uses the most basic theorem from
propositional logic to illustrate both a *theorem* environment (the statement of
the theorem) and a *proof* environment (the proof of the theorem).

<div class='lurch-embed' width='100%' height='400px' validate='true'>
<theorem>
`If P` is true, then we can conclude that `P` is true.
</theorem>
<proof>
Like the theorem says, we'll `assume P` to begin.  Then, obviously, `P` is true,
so the theorem is proven.
</proof>
</div>

Environments are shown, by default, with blue borders and shadows, to indicate
that they are meaningful (and important) portions of the document.  Lurch pays
attention to environments when grading your work.  For example, in the small
document above, you can see that not only does the final expression in the proof
get a green check mark, but the proof as a whole gets a green check mark, as
does the corresponding theorem.  That's because Lurch knows what those
environments mean, and that they should be checked as part of its grading
process.

!!! note "Exercise: Mess it up"

    Adjust the document shown above so that the proof is no longer valid.
    (For example, you could change the final $P$ to a $Q$.)
    Ask Lurch to check the document again.  Which feedback icons changed?

!!! danger "Surprise!"

    If you did the exercise above, you may be surprised to see the result.
    Why does the theorem keep its green check marks even though its proof is
    invalid?  Is Lurch making a mistake?

    *This is not typical.  It is happening here because this theorem is trivial.*
    
    Lurch actually knows that the theorem is true as soon as it reads it,
    without seeing the proof, because the theorem is self-evidently true.
    So it grades the theorem correct without even reading the proof.
    But then the proof is incorrect, and so is graded as such.

    But the overwhelming majority of theorems are not trivially true, and thus
    Lurch will rely on the proof you provide.  If you provide an invalid proof,
    your theorem will immediately lose its green check marks.  We'll see that
    soon in upcoming tutorial pages, when we try some harder proofs.

## Interacting with environments

You can move your cursor in and out of environments in the expected ways, using
the mouse and arrow keys.  But there are many ways to interact with environments
while editing a document, including these:

 - If you right-click an environment (not one of its inner expressions!) you can
   change which type of environment it is (e.g., from Theorem to Lemma).
 - From that same menu, you can also delete the environment, letting its
   contents spill out into the rest of the document.
 - If your cursor is at the start of an environment and you press Backspace, it
   merges it with the paragraph before.  (This typically deletes the environment,
   unless the previous paragraph was empty.)
 - If you want to insert a new, empty paragraph above or below the environment
   containing the cursor, see the relevant items on the Insert menu.  For
   example, you can insert a blank paragraph between the theorem and proof by
   putting your cursor in the theorem and choosing to insert a paragraph below
   it.
 - You can add new paragraphs inside a proof (or any kind of environment) by
   pressing enter while your cursor is inside it.  If you instead intended to
   add a paragraph outside the environment, see the previous bullet point.

## Too many colors?

As you can see in the document above, we're starting to get a lot of blue
borders and orange fonts in the document.  On the one hand, this is great,
because we know exactly which portions of our document Lurch is paying attention
to.  But on the other hand, it can be distracting, and it's not how math
documents typically look.

This colorful style is useful while editing the document, so that you can be
aware of how your work is being interpreted.  But you can switch to a simpler
visual style so that the document is more easily readable by a human.

!!! note "Exercise: Hide meaning"

    Toggle between showing and hiding meaning using the relevant item on the
    Document menu ("Show/hide meaning").  Also try using the corresponding
    keyboard shortcut (Alt+0).  Note that the shortcut uses a zero, not a
    capital "oh."

## More environments

If you right-click an environment and choose "Change environment type," you may
notice that there are many options besides just Theorem and Proof.  We will
learn how many of these work in later pages in this tutorial, starting with the
[next tutorial page, on the Rule environment](tut-07-rules.md).
