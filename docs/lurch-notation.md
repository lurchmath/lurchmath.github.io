
# Lurch notation reference

!!! warning "Warning: The notation below is not intended for everyone"

    Our eventual plan for Lurch is that every instructor can choose the syntax
    and notation that makes the most sense for their students.  (Furthermore,
    instructors who want students to use an equation editor only can already do
    that.)  Consequently, the notation documented below is **NOT** the
    permanent notation that our application will always use.  In fact, right
    now, it's customized particularly to the needs of the one and only
    instructor testing Lurch in an actual course!

!!! warning "Warning: The notation below will probably change often"

    While it was inspired by [AsciiMath](https://asciimath.org/), and we will
    try to stay consistent with that standard when possible, some of the unique
    notation below may change over time, in response to in-class testing, new
    needs, and feedback from students and potential new adopters.

!!! warning "Warning: The notation below is not fully documented"

    Not every symbol or expression below has a self-evident meaning.  Our
    documentation for this project has just begun, and we aim to make it more
    comprehensive with time.

The reader will also note that many meanings have more than one way to type
them.  Especially when a Lurch notation expression uses unicode characters,
there is typically a plain-text alternative, to make it easier to type.

## Logic

| Lurch notation | Meaning |
|---|---|
| `P and Q` | $P\text{ and }Q$ |
| `P∧Q` | $P\text{ and }Q$ |
| `P or Q` | $P\text{ or }Q$ |
| `P∨Q` | $P\text{ or }Q$ |
| `not P` | $\neg P$ |
| `¬P` | $\neg P$ |
| `P implies Q` | $P\Rightarrow Q$ |
| `P⇒Q` | $P\Rightarrow Q$ |
| `P iff Q` | $P\Leftrightarrow Q$ |
| `P⇔Q` | $P\Leftrightarrow Q$ |
| `contradiction` | $\rightarrow\leftarrow$ |
| `→←` | $\rightarrow\leftarrow$ |

## Quantifiers and bindings

| Lurch notation | Meaning |
|---|---|
| `forall x.x<x+1` | $\forall x, x<x+1$ |
| `for all x.x<x+1` | $\forall x, x<x+1$ |
| `∀x.x<x+1` | $\forall x, x<x+1$ |
| `exists x.x=2 cdot x` | $\exists x, x=2x$ |
| `∃x.x=2⋅x` | $\exists x, x=2x$ |
| `exists unique x.x=2 cdot x` | $\exists ! x, x=2x$ |
| `∃!x.x=2⋅x` | $\exists ! x, x=2x$ |
| `x.x+2` | $x, x+1$ |
| `x↦x+2` | $x, x+1$ |

## Algebraic expressions

| Lurch notation | Meaning |
|---|---|
| `(x)` | $\left(x\right)$ |
| `x+y` | $x+y$ |
| `2+x+y` | $2+x+y$ |
| `-x` | $-x$ |
| `1-x` | $1-x$ |
| `x*y` | $x y$ |
| `x cdot y` | $x y$ |
| `x⋅y` | $x y$ |
| `2*x*y` | $2 x y$ |
| `2 cdot x cdot y` | $2 x y$ |
| `2⋅x⋅y` | $2 x y$ |
| `2*3*x` | $2\cdot 3 x$ |
| `2 cdot 3 cdot x` | $2\cdot 3 x$ |
| `2⋅3⋅x` | $2\cdot 3 x$ |
| `1/x` | $\frac{1}{x}$ |
| `2*1/x*y` | $2\frac{1}{x}y$ |
| `(2*1)/(x*y)` | $\frac{(2\cdot 1)}{(xy)}$ |
| `x^2` | $x^2$ |
| `x factorial` | $x!$ |
| `x！` | $x!$ |

## Set Theory

| Lurch notation | Meaning |
|---|---|
| `x in A` | $x\in A$ |
| `x∈A` | $x\in A$ |
| `x notin A` | $x\notin A$ |
| `x∉A` | $x\notin A$ |
| `A subset B` | $A\subseteq B$ |
| `A subseteq B` | $A\subseteq B$ |
| `A⊆B` | $A\subseteq B$ |
| `A cup B` | $A\cup B$ |
| `A union B` | $A\cup B$ |
| `A∪B` | $A\cup B$ |
| `A cap B` | $A\cap B$ |
| `A intersect B` | $A\cap B$ |
| `A∩B` | $A\cap B$ |
| `A setminus B` | $A\setminus B$ |
| `A∖B` | $A\setminus B$ |
| `A complement` | $A^\circ$ |
| `A°` | $A^\circ$ |
| `f:A→B` | $f\colon A\to B$ |
| `f(x)` | $f\left(x\right)$ |
| `g circ f` | $g\circ f$ |
| `g∘f` | $g\circ f$ |
| `A times B` | $A\times B$ |
| `A×B` | $A\times B$ |
| `⟨x,y⟩` | $\langle x,y \rangle$ |

## Relations

| Lurch notation | Meaning |
|---|---|
| `x < 0` | $x<0$ |
| `x lt 0` | $x<0$ |
| `x leq 0` | $x\leq 0$ |
| `x ≤ 0` | $x\leq 0$ |
| `x neq 0` | $x\neq 0$ |
| `x ne 0` | $x\neq 0$ |
| `x≠0` | $x\neq 0$ |
| `m | n` | $m\mid n$ |
| `m divides n` | $m\mid n$ |
| `a≈b mod m` | $a\underset{m}{\equiv}b$ |
| `x~y` | $x\sim y$ |
| `x~y~z` | $x\sim y\sim z$ |
| `x=y` | $x=y$ |
| `x=y=z` | $x=y=z$ |
| `X loves Y` | $X\text{ loves }Y$ |
| `X is Y` | $X\text{ is }Y$ |
| `X is an Y` | $X\text{ is }Y$ |
| `X is a Y` | $X\text{ is }Y$ |
| `P is a partition of A` | $P\text{ is a partition of }A$ |
| `'~' is an equivalence relation` | $\sim\text{ is equivalence relation}$ |
| `[a]` | $\left[a\right]$ |
| `[a,~]` | $\left[a\right]_{\sim}$ |
| `'~' is a strict partial order` | $\sim\text{ is strict partial order}$ |
| `'~' is a partial order` | $\sim\text{ is partial order}$ |
| `'~' is a total order` | $\sim\text{ is total order}$ |

## Assumptions and Declarations (case insensitive)

| Lurch notation | Meaning |
|---|---|
| `Assume P` | $\text{Assume }P$ |
| `Given P` | $\text{Assume }P$ |
| `Suppose P` | $\text{Assume }P$ |
| `If P` | $\text{Assume }P$ |
| `:P` | $\text{Assume }P$ |
| `Let x` | $\text{Let }x$ |
| `Let x be such that x in ℝ` | $\text{Let }x\text{ be such that }x\in\mathbb{R}$ |
| `Let x such that x in ℝ` | $\text{Let }x\text{ be such that }x\in\mathbb{R}$ |
| `f(c)=0 for some c` | $f(c)=0\text{ for some }c$ |
| `Declare is 0 + cos` | $\text{Declare is, 0, +, and cos}$ |

## Miscellaneous

| Lurch notation | Meaning |
|---|---|
| `f⁻(x)` | $f^-\left(x\right)$ |
| `f recip(x)` | $f^-\left(x\right)$ |
| `f inv(x)` | $f^-\left(x\right)$ |
| `x recip` | $x^-$ |
| `x inv` | $x^-$ |
| `x⁻` | $x^-$ |
| `λP(k)` | $\lambda{P}(k)$ |
