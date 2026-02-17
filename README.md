# LLM Hardware Calculator

> This project was entirely written by **Claude Opus 4.6**, an AI model created by [Anthropic](https://www.anthropic.com). Claude Opus 4.6 (`claude-opus-4-6`) is part of the Claude 4 model family and is Anthropic's most capable model for complex reasoning, code generation, and multi-step tasks. It was used via [Claude Code](https://claude.com/claude-code), Anthropic's CLI tool for agentic software development.

---

## What is this?

A web-based calculator that estimates the **VRAM and memory requirements** for running or training Large Language Models (LLMs). It helps you figure out which GPU(s) you need before downloading or deploying a model.

You configure the model architecture and settings on the left side, and the right side instantly shows a live breakdown of the required memory.

### Input Parameters

| Category | Parameters |
|---|---|
| **Architecture** | Parameter count (billions), hidden size, number of layers, attention heads, KV-heads, attention type (MHA/GQA/MQA) |
| **Precision & Quantization** | Original weight type (FP32/FP16/FP8), quantization (INT8, INT4, GPTQ 3/4-bit, AWQ 4-bit, GGUF Q2-Q8) |
| **Context & KV-Cache** | Context length (tokens), batch size, KV-cache precision (FP16/INT8/INT4) |
| **Multi-GPU** | Number of GPUs (1-8), parallelization strategy (Tensor/Pipeline Parallelism) |
| **Training** | Mode (Inference/Training/LoRA), LoRA rank and target modules |
| **Misc** | Configurable memory overhead (0-50%) |

### Output (live)

- **Total VRAM** required
- Breakdown: model weights, KV-cache, activations, training overhead, memory overhead
- **Per-GPU memory** when using multiple GPUs
- **GPU recommendations** with color coding (green = fits, yellow = tight, red = insufficient)

### HuggingFace Model Search

A search field above the presets lets you search for any model on HuggingFace by name (e.g. "qwen 2.5", "llama 3", "mistral"). Results appear in a dropdown sorted by download count. Selecting a model automatically fetches its `config.json` and fills in the calculator inputs:

- **hidden_size** → Hidden Size
- **num_hidden_layers** → Layers
- **num_attention_heads** → Attention Heads
- **num_key_value_heads** → KV-Heads (auto-detects MHA/GQA/MQA)
- **max_position_embeddings** → Context Length
- **Parameter count** from safetensors metadata or estimated from architecture

The search is debounced (300ms) and uses the public HuggingFace API directly from the browser — no backend or API key required.

### Presets

Quick-load buttons for popular models: LLaMA 7B/13B/70B, Mistral 7B, Mixtral 8x7B, GPT-3 175B, Phi-2 2.7B, Qwen 72B.

### Language

English (default) and German. Toggle via the EN/DE switch in the top right corner. The selection is saved in the browser.

---

## Running the Server

The project includes a `server.sh` script to manage a local Python HTTP server.

### Requirements

- Python 3 (pre-installed on most Linux/macOS systems)
- A web browser

### Commands

```bash
# Start the server (default port 8080)
./server.sh start

# Stop the server
./server.sh stop

# Restart the server
./server.sh restart

# Check if the server is running
./server.sh status

# Use a custom port
PORT=9090 ./server.sh start
```

After starting, open **http://localhost:8080** in your browser.

---

## Project Structure

```
LLMHardwareCalculator/
  index.html   # Complete app (HTML + CSS + JS in a single file)
  server.sh    # Start/stop script for the local web server
  README.md    # This file
```
