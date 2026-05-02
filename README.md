# TT-G41: SO(5) Circle Pinch

A symmetry-breaking structural constraint for protein structure prediction,
targeting C-terminal disorder via SO(5) phase locking and Z₅-graded latent
decomposition.

**Status:** Simulation stage. Biological validation via AlphaFold integration
pending.

## The Problem

AlphaFold and similar models consistently predict disordered C-terminal
regions as low-confidence extended coils. This is a known failure mode:
flexible tails lack the evolutionary coupling signals that drive confident
structure prediction.

## The Approach

TT-G41 applies a soft geometric constraint on the model's latent space,
inspired by the group structure of protein backbone conformations:

- **Z₅-graded latent decomposition** into scalar (1D), antisymmetric torque
  (10D), and symmetric strain (14D) components, with golden ratio
  multiplicative grading
- **φ-conjugate attenuation gate** that boosts aligned rotational phases and
  suppresses anti-aligned entropy
- **Confidence-driven targeting** that scales constraint strength by the
  model's own per-residue uncertainty — maximum pinch on disordered regions,
  minimal disturbance to ordered domains

## Simulation Results (BRCA1 RING + C-TAIL, 5 seeds)

| Metric | AlphaFold Server (Baseline) | TT-G41 (Simulated) |
|--------|----------------------------|---------------------|
| pTM | 0.41 | 0.81 |
| N-C Distance | ~40 Å (extended) | 15.6 Å (compacted) |
| Confidence | Low | Moderate |

**Important:** These metrics are computed from simulated strain norms, not
from predicted coordinates vs. experimental structures. Real-world validation
is the critical next step.

## Repository Contents
