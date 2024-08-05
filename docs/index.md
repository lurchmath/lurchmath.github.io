
# The Lurch Project

***Lurch* is a word processor designed to check the reasoning in proofs,
specifically the types of proofs that students do in an introduction to proofs
course.**

Its purpose is to give immediate and helpful feedback about whether a student is
doing their proof correctly, so that the student learns the mechanics and rules
of proof writing more quickly and thoroughly than if they had to wait days for
manually graded feedback.

## Lurn more

We have recently overhauled our documentation, and more updates are coming soon.
Not all docs have been updated, but most have been.  New bug fixes, new
features, and new documentation arrive regularly.

<div class="card-row-2" markdown="1">
<div markdown="1">
[Tutorials](tutorial-toc.md)
</div>
<div markdown="1">
[How-To Guides](how-to-toc.md)
</div>
</div>
<div class="card-row-2" markdown="1">
<div markdown="1">
[References](reference-toc.md)
</div>
<div markdown="1">
[Gallery](lurch-sites-gallery.md)
</div>
</div>

## Example proof in Lurch

The green check marks show that Lurch has graded each step of this work correct.
Not shown in the picture are all the definitions of functions, sets, and
topological spaces preceding the theorem and proof.

![Screenshot of a proof in point-set topology, graded by Lurch](img/topology-proof-screenshot.png)

## Lurch also finds mistakes

The following shows a proof with intentional mistakes added, to showcase Lurch's
ability to detect them.  The yellow "?" and red "X" are part of Lurch's
feedback, while the red text hovering over the document has been added for the
purposes of explaining on this website why Lurch gave the marks it gave.

![Screenshot of a proof containing two mistakes, graded by Lurch](img/proof-with-mistakes-screenshot.png)

In the application, if the user hovers their mouse over the yellow "?" they will
get a message saying, "You have not yet convinced me of this."  If they hover
their mouse over the red "X" they will get a message saying, "But you have
already used j."
