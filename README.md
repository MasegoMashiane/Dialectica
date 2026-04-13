# Dialectica
Dialectica is a graph-based reasoning system that models arguments as structured objects rather than text. It connects premises and conclusions through logical relations (“supports”, “contradicts”), forming a directed graph for computational analysis of reasoning. Built with Node.js, Express, and MongoDB.

## Core Idea

Traditional note-taking tools store information.

Dialectica models reasoning.

Each argument is structured as:
- Premises (input propositions)
- Conclusion (derived proposition)
- Relations (logical connections to other arguments)

These form a directed graph:
- Nodes = arguments
- Edges = logical relationships (supports / contradicts)

---

## Current Implementation (Phase 1)

- Express backend setup
- MongoDB integration
- Clean layered architecture (controllers, services, repositories)
- Argument model (premises + conclusion)
- Relation model (supports / contradicts)
- Basic API endpoints for creating and retrieving data
- Initial system structure for future reasoning engine and job processing layer

---

## Architecture Overview

The system is structured into clear layers:

- **Controllers** → API request handling  
- **Services** → Business logic orchestration  
- **Repositories** → Database abstraction layer  
- **Models** → Data schema definitions  
- **Engine** → Future reasoning and graph logic  
- **Jobs** → Background processing (validation, inference, scoring)  

---

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- CORS

---

## Planned Features

- Graph traversal of argument structures
- Cycle detection (circular reasoning)
- Contradiction detection (logical consistency checks)
- Argument strength scoring
- Interactive graph visualization frontend
- Asynchronous reasoning jobs (background inference processing)

---

## Philosophy Behind the Project

Dialectica is inspired by structured forms of reasoning found in philosophy, formal logic, and mathematical systems.

The goal is to explore whether human reasoning can be represented as a computational structure without reducing its complexity to simple note storage or keyword linking.

---

## Status

Early development (Phase 1 complete: system architecture + core models)

---

## License

MIT (or update later)
