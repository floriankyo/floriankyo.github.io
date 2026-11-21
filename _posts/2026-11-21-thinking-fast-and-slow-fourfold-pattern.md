---
title: "Thinking, Fast and Slow: The Fourfold Pattern"
date: 2026-11-21 20:55:00 +0800
category: notes
tags:
  - reading
post_languages:
  - en
  - zh-CN
default_post_language: en
post_language_labels:
  en: English
  zh-CN: 中文
post_translations:
  zh-CN:
    title: "《思考，快与慢》：四格模式"
---

<style>
  .fourfold-wrap {
    margin: 0;
    max-width: 100%;
    overflow-x: auto;
  }
  .fourfold-table {
    width: 100%;
    max-width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0.65rem;
    color: var(--text-color);
    font-size: 1.05rem;
  }
  .fourfold-table th,
  .fourfold-table td {
    border: 1px solid var(--main-border-color);
    background: var(--card-bg);
    padding: 0.95rem 1rem;
    vertical-align: top;
    line-height: 1.45;
    white-space: normal !important;
    overflow-wrap: break-word;
    word-break: break-word;
  }
  .fourfold-table .line {
    white-space: normal !important;
  }
  .fourfold-table thead th {
    text-align: center;
    letter-spacing: 0.08em;
    font-weight: 700;
  }
  .fourfold-table tbody th {
    text-align: left;
    width: 28%;
  }
  .fourfold-table .prob,
  .fourfold-table .line,
  .fourfold-table .col-label {
    display: block;
  }
  .fourfold-table .prob {
    font-weight: 700;
    letter-spacing: 0.04em;
  }
  .fourfold-table .effect {
    display: block;
    margin-top: 0.35rem;
  }
  .fourfold-table .attitude {
    font-weight: 700;
    letter-spacing: 0.04em;
    margin: 0.45rem 0;
  }
  .fourfold-table .is-gain {
    box-shadow: inset 3px 0 0 #3e7a50;
  }
  .fourfold-table .is-loss {
    box-shadow: inset 3px 0 0 #b83e48;
  }
  .fourfold-table .col-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
    border: 0;
  }
  @media (max-width: 640px) {
    .fourfold-table {
      border-spacing: 0;
    }
    .fourfold-table thead {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      white-space: nowrap;
      border: 0;
    }
    .fourfold-table,
    .fourfold-table tbody,
    .fourfold-table tr,
    .fourfold-table th,
    .fourfold-table td {
      display: block;
      width: auto;
    }
    .fourfold-table tbody th {
      width: auto;
      margin-top: 1rem;
    }
    .fourfold-table td {
      margin-top: 0.55rem;
    }
    .fourfold-table .col-label {
      position: static;
      width: auto;
      height: auto;
      margin: 0 0 0.45rem;
      overflow: visible;
      clip: auto;
      letter-spacing: 0.08em;
      font-weight: 700;
    }
  }
</style>

<div class="post-lang-content" data-post-lang="en" hidden></div>
<div class="post-lang-content" data-post-lang="zh-CN" hidden></div>

<div class="fourfold-wrap">
  <table class="fourfold-table">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">GAINS</th>
        <th scope="col">LOSSES</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">
          <span class="prob">HIGH PROBABILITY</span>
          <span class="effect">Certainty Effect</span>
        </th>
        <td class="is-gain">
          <span class="col-label">GAINS</span>
          <span class="line">95% chance to win $10,000</span>
          <span class="line">Fear of disappointment</span>
          <span class="line attitude">RISK AVERSE</span>
          <span class="line">Accept unfavorable settlement</span>
        </td>
        <td class="is-loss">
          <span class="col-label">LOSSES</span>
          <span class="line">95% chance to lose $10,000</span>
          <span class="line">Hope to avoid loss</span>
          <span class="line attitude">RISK SEEKING</span>
          <span class="line">Reject favorable settlement</span>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <span class="prob">LOW PROBABILITY</span>
          <span class="effect">Possibility Effect</span>
        </th>
        <td class="is-gain">
          <span class="col-label">GAINS</span>
          <span class="line">5% chance to win $10,000</span>
          <span class="line">Hope of large gain</span>
          <span class="line attitude">RISK SEEKING</span>
          <span class="line">Reject favorable settlement</span>
        </td>
        <td class="is-loss">
          <span class="col-label">LOSSES</span>
          <span class="line">5% chance to lose $10,000</span>
          <span class="line">Fear of large loss</span>
          <span class="line attitude">RISK AVERSE</span>
          <span class="line">Accept unfavorable settlement</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
