// ==================== i18n ====================
const I18N = {
  en: {
    headerSub: 'Calculate VRAM and memory requirements for Large Language Models',
    h2Config: 'Model Configuration',
    h2Results: 'Results',
    sec_arch: 'Architecture',
    sec_precision: 'Precision & Quantization',
    sec_context: 'Context & KV-Cache',
    sec_misc: 'Miscellaneous',
    sec_lora: 'LoRA Configuration',
    lbl_params: 'Parameters (Billions)',
    lbl_layers: 'Number of Layers',
    lbl_heads: 'Attention Heads',
    lbl_kvheads: 'KV-Heads',
    lbl_attn_type: 'Attention Type',
    lbl_weight_type: 'Weight Type (Original Model)',
    lbl_quant: 'Quantization',
    lbl_ctx: 'Context Length (Tokens)',
    lbl_kv_prec: 'KV-Cache Precision',
    lbl_gpu_count: 'Number of GPUs',
    lbl_parallel: 'Parallelization',
    lbl_overhead: 'Memory Overhead',
    lbl_mode: 'Mode',
    lbl_lora_targets: 'LoRA Target Modules',
    res_total_vram: 'Total VRAM (GPU)',
    res_weights: 'Model Weights',
    res_act_overhead: 'Activations & Overhead',
    res_train_extra: 'Training Extra Memory',
    res_breakdown: 'Breakdown',
    res_gpu_rec: 'GPU Recommendations',
    quant_none: 'None (Original)',
    mode_inference: 'Inference',
    mode_training: 'Training (Fine-Tuning)',
    mode_lora: 'LoRA Fine-Tuning',
    lora_qv: 'Q + V Projections',
    lora_qkv: 'Q + K + V Projections',
    lora_qkvo: 'Q + K + V + Output Projections',
    lora_all: 'All Linear Layers (incl. FFN)',
    banner_inference: 'Inference mode: Calculates memory for loading and running the model.',
    banner_training: 'Training mode: Includes gradients and optimizer states (Adam). Significantly more memory required.',
    banner_lora: 'LoRA mode: Parameter-efficient fine-tuning. Only adapter weights are trained.',
    warn_headdim: 'Hidden Size ({hidden}) is not divisible by Attention Heads ({heads}). Head dimension will be rounded.',
    bd_weights: 'Model Weights',
    bd_kvcache: 'KV-Cache',
    bd_activations: 'Activations',
    bd_training: 'Training / LoRA',
    bd_overhead: 'Overhead',
    bd_total: 'Total',
    bd_per_gpu: 'Per GPU',
    total_suffix: 'total',
    tp_desc: 'Tensor Parallelism: {mem} per GPU ({n} GPUs)',
    pp_desc: 'Pipeline Parallelism: {mem} per GPU ({n} GPUs, ~{layers} layers/GPU)',
    train_desc_full: 'Master Weights + Gradients + Adam Optimizer (1st/2nd Moment) each FP32',
    train_desc_lora: 'LoRA Adapter (r={rank}, {modules} modules, ~{pct}% of params) + Adam',
    kv_sub: 'KV-Heads: {kvh} ({ratio}% of Q-Heads), {bits} bit',
    hf_search_placeholder: 'Search HuggingFace models...',
    hf_no_results: 'No models found',
    hf_downloads: 'downloads',
    hf_loading: 'Loading model config...',
    hf_error: 'Could not load model config',
  },
  de: {
    headerSub: 'Berechne VRAM- und Speicheranforderungen fuer Large Language Models',
    h2Config: 'Modellkonfiguration',
    h2Results: 'Ergebnisse',
    sec_arch: 'Architektur',
    sec_precision: 'Praezision & Quantisierung',
    sec_context: 'Kontext & KV-Cache',
    sec_misc: 'Sonstiges',
    sec_lora: 'LoRA-Konfiguration',
    lbl_params: 'Parameter (Milliarden)',
    lbl_layers: 'Anzahl Layer',
    lbl_heads: 'Attention Heads',
    lbl_kvheads: 'KV-Heads',
    lbl_attn_type: 'Attention-Typ',
    lbl_weight_type: 'Gewichtstyp (Originalmodell)',
    lbl_quant: 'Quantisierung',
    lbl_ctx: 'Kontextlaenge (Tokens)',
    lbl_kv_prec: 'KV-Cache Praezision',
    lbl_gpu_count: 'Anzahl GPUs',
    lbl_parallel: 'Parallelisierung',
    lbl_overhead: 'Speicher-Overhead',
    lbl_mode: 'Modus',
    lbl_lora_targets: 'LoRA Target-Module',
    res_total_vram: 'Gesamt-VRAM (GPU)',
    res_weights: 'Modellgewichte',
    res_act_overhead: 'Aktivierungen & Overhead',
    res_train_extra: 'Training-Zusatzspeicher',
    res_breakdown: 'Aufschluesselung',
    res_gpu_rec: 'GPU-Empfehlungen',
    quant_none: 'Keine (Original)',
    mode_inference: 'Inferenz',
    mode_training: 'Training (Fine-Tuning)',
    mode_lora: 'LoRA Fine-Tuning',
    lora_qv: 'Q + V Projektionen',
    lora_qkv: 'Q + K + V Projektionen',
    lora_qkvo: 'Q + K + V + Output Projektionen',
    lora_all: 'Alle Linear-Layer (inkl. FFN)',
    banner_inference: 'Inferenz-Modus: Berechnet den Speicher fuer das Laden und Ausfuehren des Modells.',
    banner_training: 'Training-Modus: Beinhaltet Gradients und Optimizer-States (Adam). Deutlich mehr Speicher erforderlich.',
    banner_lora: 'LoRA-Modus: Parameter-effizientes Fine-Tuning. Nur Adapter-Gewichte werden trainiert.',
    warn_headdim: 'Hidden Size ({hidden}) ist nicht durch Attention Heads ({heads}) teilbar. Head-Dimension wird gerundet.',
    bd_weights: 'Modellgewichte',
    bd_kvcache: 'KV-Cache',
    bd_activations: 'Aktivierungen',
    bd_training: 'Training / LoRA',
    bd_overhead: 'Overhead',
    bd_total: 'Gesamt',
    bd_per_gpu: 'Pro GPU',
    total_suffix: 'gesamt',
    tp_desc: 'Tensor Parallelism: {mem} pro GPU ({n} GPUs)',
    pp_desc: 'Pipeline Parallelism: {mem} pro GPU ({n} GPUs, ~{layers} Layer/GPU)',
    train_desc_full: 'Master-Weights + Gradients + Adam-Optimizer (1st/2nd Moment) je FP32',
    train_desc_lora: 'LoRA-Adapter (r={rank}, {modules} Module, ~{pct}% der Parameter) + Adam',
    kv_sub: 'KV-Heads: {kvh} ({ratio}% von Q-Heads), {bits} bit',
    hf_search_placeholder: 'HuggingFace-Modelle suchen...',
    hf_no_results: 'Keine Modelle gefunden',
    hf_downloads: 'Downloads',
    hf_loading: 'Lade Modellkonfiguration...',
    hf_error: 'Modellkonfiguration konnte nicht geladen werden',
  }
};

let currentLang = 'en';

function t(key) { return I18N[currentLang][key] || key; }

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('llm-calc-lang', lang);

  $('langEn').classList.toggle('active', lang === 'en');
  $('langDe').classList.toggle('active', lang === 'de');

  // Update static i18n text nodes
  $('headerSub').textContent = t('headerSub');
  $('h2Config').textContent = t('h2Config');
  $('h2Results').textContent = t('h2Results');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });

  // Update select option texts
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n-opt'));
  });

  // Update placeholder texts
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });

  // Re-run calc to update dynamic strings
  calc();
}

// ==================== Constants ====================
const GB_BYTES = 1024 ** 3;
const VRAM_SAFE_THRESHOLD = 0.85;

const PRESETS = {
  llama7b:   { params:7, hidden:4096, layers:32, heads:32, kvHeads:32, attn:'mha', ctx:4096 },
  llama13b:  { params:13, hidden:5120, layers:40, heads:40, kvHeads:40, attn:'mha', ctx:4096 },
  llama70b:  { params:70, hidden:8192, layers:80, heads:64, kvHeads:8, attn:'gqa', ctx:4096 },
  mistral7b: { params:7.2, hidden:4096, layers:32, heads:32, kvHeads:8, attn:'gqa', ctx:32768 },
  mixtral:   { params:46.7, hidden:4096, layers:32, heads:32, kvHeads:8, attn:'gqa', ctx:32768 },
  gpt3:      { params:175, hidden:12288, layers:96, heads:96, kvHeads:96, attn:'mha', ctx:2048 },
  phi2:      { params:2.7, hidden:2560, layers:32, heads:32, kvHeads:32, attn:'mha', ctx:2048 },
  qwen72b:   { params:72, hidden:8192, layers:80, heads:64, kvHeads:8, attn:'gqa', ctx:32768 },
};

const GPUS_SINGLE = [
  { name: 'RTX 3060', vram: 12 },
  { name: 'RTX 4060 Ti', vram: 16 },
  { name: 'RTX 4070 Ti S', vram: 16 },
  { name: 'RTX 4080', vram: 16 },
  { name: 'RTX 3090', vram: 24 },
  { name: 'RTX 4090', vram: 24 },
  { name: 'RTX 5090', vram: 32 },
  { name: 'A100 40GB', vram: 40 },
  { name: 'A100 80GB', vram: 80 },
  { name: 'H100 80GB', vram: 80 },
  { name: 'MI300X', vram: 192 },
];

const QUANT_BPW = {
  none: null,
  int8: 8,
  int4: 4,
  gptq4: 4.25,
  gptq3: 3.25,
  awq4: 4.25,
  ggml_q8: 8.1,
  ggml_q6: 6.6,
  ggml_q5: 5.6,
  ggml_q4: 4.65,
  ggml_q3: 3.6,
  ggml_q2: 2.7,
};

const LORA_TARGET_MODULES = {
  qv: 2,
  qkv: 3,
  qkvo: 4,
  all: 7,
};

// ==================== Helpers ====================
function $(id) { return document.getElementById(id); }

function safeNum(val, fallback, min) {
  const n = parseFloat(val);
  if (isNaN(n) || !isFinite(n)) return fallback;
  if (min !== undefined && n < min) return min;
  return n;
}

function safeInt(val, fallback, min) {
  const n = parseInt(val);
  if (isNaN(n) || !isFinite(n)) return fallback;
  if (min !== undefined && n < min) return min;
  return n;
}

// ==================== Input Sync ====================
let syncing = false;
const pairs = [
  ['params','paramsNum','paramHint', v => v + 'B'],
  ['hidden','hiddenNum','hiddenHint', v => v],
  ['layers','layersNum','layerHint', v => v],
  ['heads','headsNum','headsHint', v => v],
  ['kvHeads','kvHeadsNum','kvHeadsHint', v => v],
  ['context','contextNum','ctxHint', v => Number(v).toLocaleString('de-DE')],
  ['batch','batchNum','batchHint', v => v],
  ['gpuCount','gpuCountNum','gpuCountHint', v => v],
  ['loraRank','loraRankNum','loraRankHint', v => v],
];

pairs.forEach(([slider, num, hint, fmt]) => {
  const s = $(slider), n = $(num), h = $(hint);
  s.addEventListener('input', () => {
    if (syncing) return;
    syncing = true;
    n.value = s.value;
    h.textContent = fmt(s.value);
    syncing = false;
    calc();
  });
  n.addEventListener('input', () => {
    if (syncing) return;
    syncing = true;
    s.value = n.value;
    h.textContent = fmt(n.value);
    syncing = false;
    calc();
  });
});

$('overhead').addEventListener('input', () => {
  $('overheadHint').textContent = $('overhead').value + '%';
  $('overheadVal').textContent = $('overhead').value + '%';
  calc();
});

['weightType','quantType','kvPrec','attnType','mode','parallelism','loraTargets'].forEach(id => {
  $(id).addEventListener('change', calc);
});

$('mode').addEventListener('change', () => {
  $('loraSection').classList.toggle('visible', $('mode').value === 'lora');
});

function onAttnChange() {
  const attn = $('attnType').value;
  const heads = parseInt($('heads').value) || 32;
  if (attn === 'mha') {
    $('kvHeads').value = heads;
    $('kvHeadsNum').value = heads;
    $('kvHeadsHint').textContent = heads;
  } else if (attn === 'mqa') {
    $('kvHeads').value = 1;
    $('kvHeadsNum').value = 1;
    $('kvHeadsHint').textContent = 1;
  }
  calc();
}

function loadPreset(key, btn) {
  document.querySelectorAll('#presetBar button').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const p = PRESETS[key];
  $('params').value = p.params; $('paramsNum').value = p.params; $('paramHint').textContent = p.params + 'B';
  $('hidden').value = p.hidden; $('hiddenNum').value = p.hidden; $('hiddenHint').textContent = p.hidden;
  $('layers').value = p.layers; $('layersNum').value = p.layers; $('layerHint').textContent = p.layers;
  $('heads').value = p.heads; $('headsNum').value = p.heads; $('headsHint').textContent = p.heads;
  $('kvHeads').value = p.kvHeads; $('kvHeadsNum').value = p.kvHeads; $('kvHeadsHint').textContent = p.kvHeads;
  $('context').value = p.ctx; $('contextNum').value = p.ctx; $('ctxHint').textContent = Number(p.ctx).toLocaleString('de-DE');
  $('attnType').value = p.attn;
  calc();
}

// ==================== Formatting ====================
function fmt(gb) {
  if (!isFinite(gb) || isNaN(gb)) return '– GB';
  if (gb < 0.01) return (gb * 1024).toFixed(1) + ' MB';
  if (gb >= 1000) return (gb / 1000).toFixed(2) + ' TB';
  return gb.toFixed(2) + ' GB';
}

// ==================== Main Calculation ====================
function calc() {
  const warnings = [];

  const params    = safeNum($('paramsNum').value, 7, 0.1) * 1e9;
  const hidden    = safeInt($('hiddenNum').value, 4096, 64);
  const layers    = safeInt($('layersNum').value, 32, 1);
  const nHeads    = safeInt($('headsNum').value, 32, 1);
  const nKvHeads  = safeInt($('kvHeadsNum').value, 32, 1);
  const weightBits = parseInt($('weightType').value);
  const quantType = $('quantType').value;
  const ctxLen    = safeInt($('contextNum').value, 4096, 1);
  const batchSize = safeInt($('batchNum').value, 1, 1);
  const kvBits    = parseInt($('kvPrec').value);
  const overheadPct = safeInt($('overhead').value, 20, 0) / 100;
  const mode      = $('mode').value;
  const numGpus   = safeInt($('gpuCountNum').value, 1, 1);
  const parallel  = $('parallelism').value;
  const loraRank  = safeInt($('loraRankNum').value, 16, 1);
  const loraTargetKey = $('loraTargets').value;

  if (hidden % nHeads !== 0) {
    warnings.push(t('warn_headdim').replace('{hidden}', hidden).replace('{heads}', nHeads));
  }
  const headDim = Math.floor(hidden / nHeads);

  let effectiveBpw = (quantType === 'none') ? weightBits : QUANT_BPW[quantType];

  // Model weights
  const weightGB = (params * (effectiveBpw / 8)) / GB_BYTES;

  // KV-Cache
  const kvCacheGB = (2 * layers * nKvHeads * headDim * ctxLen * batchSize * (kvBits / 8)) / GB_BYTES;

  // Activations
  let activationBytes;
  if (mode === 'inference') {
    activationBytes = batchSize * ctxLen * hidden * 4 * 2;
  } else if (mode === 'training') {
    const seqFactor = 34 + (5 * nHeads * ctxLen / hidden);
    activationBytes = layers * batchSize * ctxLen * hidden * seqFactor;
  } else {
    const seqFactor = 34 + (5 * nHeads * ctxLen / hidden);
    activationBytes = layers * batchSize * ctxLen * hidden * seqFactor * 0.5;
  }
  const activationGB = activationBytes / GB_BYTES;

  // Training overhead
  let trainGB = 0;
  let trainDesc = '';
  if (mode === 'training') {
    trainGB = (params * 16) / GB_BYTES;
    trainDesc = t('train_desc_full');
  } else if (mode === 'lora') {
    const numTargets = LORA_TARGET_MODULES[loraTargetKey];
    const loraParams = 2 * loraRank * hidden * numTargets * layers;
    const loraParamsPct = ((loraParams / params) * 100).toFixed(2);
    trainGB = (loraParams * 16) / GB_BYTES;
    trainDesc = t('train_desc_lora')
      .replace('{rank}', loraRank)
      .replace('{modules}', numTargets)
      .replace('{pct}', loraParamsPct);
  }

  // Overhead (not on optimizer states)
  const inferenceBase = weightGB + kvCacheGB + activationGB;
  const overheadGB = inferenceBase * overheadPct;
  const totalGB = inferenceBase + trainGB + overheadGB;

  // Multi-GPU
  let perGpuGB;
  let multiGpuDesc = '';
  if (numGpus > 1) {
    if (parallel === 'tensor') {
      const perGpuWeights = weightGB / numGpus;
      const perGpuKv = kvCacheGB / numGpus;
      const perGpuAct = activationGB / numGpus;
      const perGpuTrain = trainGB / numGpus;
      const perGpuOh = (perGpuWeights + perGpuKv + perGpuAct) * overheadPct;
      perGpuGB = perGpuWeights + perGpuKv + perGpuAct + perGpuTrain + perGpuOh;
      multiGpuDesc = t('tp_desc').replace('{mem}', fmt(perGpuGB)).replace('{n}', numGpus);
    } else {
      const layersPerGpu = Math.ceil(layers / numGpus);
      const perGpuWeights = weightGB / numGpus;
      const perGpuKv = kvCacheGB / numGpus;
      const perGpuAct = activationGB;
      const perGpuTrain = trainGB / numGpus;
      const perGpuOh = (perGpuWeights + perGpuKv + perGpuAct) * overheadPct;
      perGpuGB = perGpuWeights + perGpuKv + perGpuAct + perGpuTrain + perGpuOh;
      multiGpuDesc = t('pp_desc').replace('{mem}', fmt(perGpuGB)).replace('{n}', numGpus).replace('{layers}', layersPerGpu);
    }
  } else {
    perGpuGB = totalGB;
  }

  // === Update UI ===
  $('totalVram').textContent = fmt(totalGB);
  $('totalVramSub').textContent = `${(totalGB * 1024).toFixed(0)} MB ${t('total_suffix')}`;

  const multiInfo = $('multiGpuInfo');
  if (numGpus > 1) {
    multiInfo.style.display = 'block';
    multiInfo.textContent = multiGpuDesc;
  } else {
    multiInfo.style.display = 'none';
  }

  $('weightMem').textContent = fmt(weightGB);
  $('weightMemSub').textContent = `${effectiveBpw.toFixed(1)} bit/weight`;
  $('kvMem').textContent = fmt(kvCacheGB);

  const kvRatio = nKvHeads / nHeads;
  $('kvMemSub').textContent = t('kv_sub')
    .replace('{kvh}', nKvHeads)
    .replace('{ratio}', (kvRatio * 100).toFixed(0))
    .replace('{bits}', kvBits);

  $('overheadMem').textContent = fmt(activationGB + overheadGB);

  const trainingCard = $('trainingCard');
  if (mode === 'inference') {
    trainingCard.style.display = 'none';
    $('modeBanner').textContent = t('banner_inference');
  } else {
    trainingCard.style.display = 'block';
    $('trainMem').textContent = fmt(trainGB);
    $('trainMemSub').textContent = trainDesc;
    $('modeBanner').textContent = mode === 'training' ? t('banner_training') : t('banner_lora');
  }

  // Warnings
  const warnBanner = $('warnBanner');
  if (warnings.length > 0) {
    warnBanner.style.display = 'block';
    warnBanner.innerHTML = warnings.join('<br>');
  } else {
    warnBanner.style.display = 'none';
  }

  // Breakdown
  let html = `
    <div class="breakdown-row"><span class="label">${t('bd_weights')}</span><span class="val">${fmt(weightGB)}</span></div>
    <div class="breakdown-row"><span class="label">${t('bd_kvcache')}</span><span class="val">${fmt(kvCacheGB)}</span></div>
    <div class="breakdown-row"><span class="label">${t('bd_activations')}</span><span class="val">${fmt(activationGB)}</span></div>`;
  if (trainGB > 0) {
    html += `<div class="breakdown-row"><span class="label">${t('bd_training')}</span><span class="val">${fmt(trainGB)}</span></div>`;
  }
  html += `
    <div class="breakdown-row"><span class="label">${t('bd_overhead')} (${(overheadPct*100).toFixed(0)}%)</span><span class="val">${fmt(overheadGB)}</span></div>
    <div class="breakdown-row" style="border-top:2px solid var(--accent);padding-top:0.6rem;font-weight:700;">
      <span class="label">${t('bd_total')}</span><span class="val" style="color:var(--accent)">${fmt(totalGB)}</span>
    </div>`;
  if (numGpus > 1) {
    html += `
    <div class="breakdown-row" style="border-top:1px dashed var(--accent2);padding-top:0.5rem;">
      <span class="label">${t('bd_per_gpu')} (${numGpus}x)</span><span class="val" style="color:var(--accent2)">${fmt(perGpuGB)}</span>
    </div>`;
  }
  $('breakdown').innerHTML = html;

  // GPU recommendations
  const rec = $('gpuRec');
  rec.innerHTML = '';
  GPUS_SINGLE.forEach(gpu => {
    const tag = document.createElement('span');
    tag.className = 'gpu-tag';
    const label = numGpus > 1 ? `${numGpus}x ${gpu.name}` : gpu.name + ` ${gpu.vram}GB`;
    if (perGpuGB <= gpu.vram * VRAM_SAFE_THRESHOLD) {
      tag.classList.add('green');
      tag.textContent = label + ' \u2714';
    } else if (perGpuGB <= gpu.vram) {
      tag.classList.add('yellow');
      tag.textContent = label + ' \u26A0';
    } else {
      tag.classList.add('red');
      tag.textContent = label + ' \u2718';
    }
    rec.appendChild(tag);
  });
}

// ==================== HuggingFace Search ====================
(function() {
  const searchInput = $('hfSearch');
  const dropdown = $('hfDropdown');
  const spinner = $('hfSpinner');
  let debounceTimer = null;
  let abortCtrl = null;
  let cachedModelData = {};

  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    const query = searchInput.value.trim();
    if (query.length < 2) {
      hideDropdown();
      return;
    }
    debounceTimer = setTimeout(() => searchHF(query), 300);
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideDropdown();
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.hf-search-wrapper')) hideDropdown();
  });

  function hideDropdown() {
    dropdown.classList.remove('visible');
    spinner.style.display = 'none';
  }

  async function searchHF(query) {
    if (abortCtrl) abortCtrl.abort();
    abortCtrl = new AbortController();
    spinner.style.display = 'block';

    try {
      const url = `https://huggingface.co/api/models?search=${encodeURIComponent(query)}&limit=15&filter=transformers&sort=downloads&direction=-1`;
      const resp = await fetch(url, { signal: abortCtrl.signal });
      if (!resp.ok) throw new Error('API error');
      const models = await resp.json();

      spinner.style.display = 'none';
      cachedModelData = {};

      if (models.length === 0) {
        dropdown.innerHTML = `<div class="hf-dropdown-empty">${t('hf_no_results')}</div>`;
        dropdown.classList.add('visible');
        return;
      }

      dropdown.innerHTML = '';
      models.forEach(model => {
        cachedModelData[model.id] = model;
        const item = document.createElement('div');
        item.className = 'hf-dropdown-item';

        const downloads = model.downloads != null ? formatDownloads(model.downloads) : '';
        const paramSize = extractParamSize(model);

        item.innerHTML = `
          <div class="hf-model-name">${escapeHtml(model.id)}</div>
          <div class="hf-model-meta">${[paramSize, downloads ? downloads + ' ' + t('hf_downloads') : ''].filter(Boolean).join(' · ')}</div>
        `;
        item.addEventListener('click', () => selectModel(model.id));
        dropdown.appendChild(item);
      });
      dropdown.classList.add('visible');
    } catch (e) {
      if (e.name === 'AbortError') return;
      spinner.style.display = 'none';
      dropdown.innerHTML = `<div class="hf-dropdown-empty">${t('hf_error')}</div>`;
      dropdown.classList.add('visible');
    }
  }

  async function selectModel(modelId) {
    hideDropdown();
    searchInput.value = modelId;
    spinner.style.display = 'block';

    // Clear active preset
    document.querySelectorAll('#presetBar button').forEach(b => b.classList.remove('active'));

    try {
      // Fetch config.json and model details (for safetensors param count) in parallel
      const [configResp, modelResp] = await Promise.allSettled([
        fetch(`https://huggingface.co/${modelId}/resolve/main/config.json`),
        fetch(`https://huggingface.co/api/models/${modelId}`)
      ]);

      spinner.style.display = 'none';

      // Store model detail data if available
      if (modelResp.status === 'fulfilled' && modelResp.value.ok) {
        const modelDetail = await modelResp.value.json();
        cachedModelData[modelId] = { ...cachedModelData[modelId], ...modelDetail };
      }

      if (configResp.status === 'fulfilled' && configResp.value.ok) {
        const config = await configResp.value.json();
        applyConfig(config, modelId);
      } else {
        // Config fetch failed — try to use what we have from search/detail data
        const model = cachedModelData[modelId];
        if (model) applyFromSearchData(model);
      }
    } catch (e) {
      spinner.style.display = 'none';
      const model = cachedModelData[modelId];
      if (model) applyFromSearchData(model);
    }
  }

  function applyConfig(config, modelId) {
    // hidden_size
    if (config.hidden_size) {
      setField('hidden', 'hiddenNum', 'hiddenHint', config.hidden_size, v => v);
    }

    // num_hidden_layers
    if (config.num_hidden_layers) {
      setField('layers', 'layersNum', 'layerHint', config.num_hidden_layers, v => v);
    }

    // num_attention_heads
    if (config.num_attention_heads) {
      setField('heads', 'headsNum', 'headsHint', config.num_attention_heads, v => v);
    }

    // num_key_value_heads → detect attention type
    const nHeads = config.num_attention_heads || 32;
    let kvHeads = config.num_key_value_heads;
    if (kvHeads != null) {
      setField('kvHeads', 'kvHeadsNum', 'kvHeadsHint', kvHeads, v => v);
      if (kvHeads === 1) {
        $('attnType').value = 'mqa';
      } else if (kvHeads < nHeads) {
        $('attnType').value = 'gqa';
      } else {
        $('attnType').value = 'mha';
      }
    } else {
      // No KV heads specified → MHA, KV heads = attention heads
      setField('kvHeads', 'kvHeadsNum', 'kvHeadsHint', nHeads, v => v);
      $('attnType').value = 'mha';
    }

    // max_position_embeddings → context length
    const maxPos = config.max_position_embeddings || config.n_positions || config.seq_length;
    if (maxPos) {
      const ctxVal = Math.min(maxPos, 131072);
      setField('context', 'contextNum', 'ctxHint', ctxVal, v => Number(v).toLocaleString('de-DE'));
    }

    // Parameter count: try safetensors from search data, then estimate
    const model = cachedModelData[modelId];
    let paramB = extractParamBillions(model);
    if (!paramB && config.hidden_size && config.num_hidden_layers && config.vocab_size) {
      paramB = estimateParams(config);
    }
    if (paramB) {
      const clamped = Math.min(Math.max(paramB, 0.1), 500);
      const rounded = Math.round(clamped * 10) / 10;
      setField('params', 'paramsNum', 'paramHint', rounded, v => v + 'B');
    }

    calc();
  }

  function applyFromSearchData(model) {
    // Only parameter count available from search data
    const paramB = extractParamBillions(model);
    if (paramB) {
      const clamped = Math.min(Math.max(paramB, 0.1), 500);
      const rounded = Math.round(clamped * 10) / 10;
      setField('params', 'paramsNum', 'paramHint', rounded, v => v + 'B');
      calc();
    }
  }

  function setField(sliderId, numId, hintId, value, fmtFn) {
    const s = $(sliderId), n = $(numId), h = $(hintId);
    s.value = value;
    n.value = value;
    h.textContent = fmtFn(value);
  }

  function extractParamBillions(model) {
    if (!model) return null;
    // Try safetensors metadata
    if (model.safetensors && model.safetensors.total) {
      return model.safetensors.total / 1e9;
    }
    return null;
  }

  function extractParamSize(model) {
    const b = extractParamBillions(model);
    if (b == null) return '';
    if (b >= 1) return b.toFixed(1) + 'B';
    return (b * 1000).toFixed(0) + 'M';
  }

  function estimateParams(config) {
    // Rough transformer parameter estimate
    const h = config.hidden_size;
    const L = config.num_hidden_layers;
    const V = config.vocab_size || 32000;
    const ffnDim = config.intermediate_size || 4 * h;
    // Per layer: 4*h*h (attn) + 2*h*ffnDim (FFN) + small terms
    const perLayer = 4 * h * h + 2 * h * ffnDim;
    const embedding = V * h;
    const total = L * perLayer + 2 * embedding;
    return total / 1e9;
  }

  function formatDownloads(n) {
    if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
    if (n >= 1e3) return (n / 1e3).toFixed(1) + 'k';
    return String(n);
  }

  function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }
})();

// ==================== Init ====================
const savedLang = localStorage.getItem('llm-calc-lang') || 'en';
setLang(savedLang);
