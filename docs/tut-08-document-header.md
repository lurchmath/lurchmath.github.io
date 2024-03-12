
# Hiding and showing rules

<div class='lurch-embed' width='100%' height='300px' validate='true'>
{
    "menuData" : {
        "document" : {
            "title" : "Document",
            "items" : "editheader | validate clearvalidation | docsettings temptoggle"
        }
    }
}

<div class='header'>
Tell Lurch which symbols are reserved in our mathematical system:
`Declare and`.

<rule>
**Conjunction introduction:**
`Assume A` and `assume B`.  Then `A and B`.
</rule>
</div>

`Assume X` and also `assume Y`.  We can use the standard conjunction
introduction rule to conclude `X and Y`.  How did we do that?
</div>

The document above shows the exact same reasoning that we saw in
[the previous tutorial page](tut-07-rules.md) (and, optionally, in the
corresponding [rabbit trail for instructors](tut-07b-metavariables.md)),
but this time there is no conjunction introduction rule stated.
Where did it come from?

## The document header

Every document has an invisible *header,* which is an initial segment of the
document that is hidden from view.  It is a place for the document author to put
any background material on which the document content relies.  Then the document
is not cluttered with too many definitions, but Lurch still knows what math the
user is allowed to rely upon in their reasoning.

In the main Lurch application, instructors can edit the contents of the document
header, importing entire other documents into it by specifying their web
address.  We will not cover that feature here.

In the small copy of Lurch included in these tutorial pages, we provide a simple
way for you to view and edit the document header:  From the Document menu,
choose "Edit document header in new window."  This opens a new tab in your
browser containing the document header.

 - The border of that document is blue dashes, to make it clear that it's
   not a document in its own right, just the header of some other document.
 - If you make changes and save, they propagate back to the header in the
   original browser tab.

!!! note "Exercise: View the header"

    In the document shown above, use the method just described to view its header.
    That is, click the Document menu, and choose "Edit document header in new
    window."

## Why is this useful?

Although all the Lurch documents shown so far in this tutorial have been small,
you can imagine a document built on a large, sophisticated mathematical system,
with dozens of rules, axioms, and theorems already defined and proven, ready for
use.  (In fact, you don't have to imagine it--an example with most of the rules
of propositional logic appears on
[the homepage of this documentation site](index.md).)  It would be cumbersome to
have all that content at the top of every document that wanted to use it, and
you would need to scroll past it all to get to the area where you can do your
own work.  So instead, such content can be hidden in the document header, still
usable in your work, but not always in your way.

Furthermore, sometimes the nitty gritty details of how the rules of logic for a
system have been defined are not of interest to the reader, who prefers to think
and read at a higher level, where mathematical theorems are being proven.  So
it's nice to hide the low-level content for that reason as well.

Finally, a student working on proofs may want to know which theorems and rules
have already been proven, and not want to scroll up and down over and over to
find them.  Having the header openable in a separate tab means you can place two
browser windows side-by-side, read the theorems in one, and write your work in
the one next to it.  Not everyone will want to work this way, but it is at least
an option for those who want it.

!!! note "Exercise: Change the header"

     1. Ensure that you have the header of the above document open in a new tab,
        as in the previous exercise.
     2. **In the header's tab,** make a change to the conjunction introduction\
        rule.  For example, you might delete the conclusion, so that the rule no
        longer has any value.
     3. **Still in the header's tab,** save your work using the File menu.
     4. **Back on this page,** in the Lurch document shown above, use the
        Document menu to re-check the reasoning in the document.
     5. Observe that the conclusion is no longer judged correct, because you
        removed from the document header the rule on which it depended.

## Lurch doesn't always use the header

When Lurch documents get more complex, even writing the rules in the header is
too cumbersome.  Once you're 10 weeks into a course, you've learned too much
mathematics to sum it up in one document.  So you can make a series of Lurch
documents, each importing all the content of earlier ones.  But that is for a
more advanced section of the tutorial.  For now, we will use the header to store
the small number of rules we'll need for each example.

## Let's do some *actual* mathematics

As stated above, all the example documents in this tutorial series so far have
been very small, using just one tiny rule of logic at a time.  Let's get to some
legitimate mathematical proofs!  But we're not going to jump right into number
theory or real analysis from here; we'll go one step at a time, beginning with
[propositional logic](tut-09a-real-math.md).
