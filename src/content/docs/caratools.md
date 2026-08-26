---
title: "Tools"
description: "Panduan lengkap tools, routing, content collections, HTML, CSS, JavaScript, dan Astro."
category: "Tools"
order: 2
---

<p class="lead">
  Tools menyediakan berbagai utilitas yang dapat digunakan untuk membantu
  pekerjaan sehari-hari, development, dan pengelolaan konten.
</p>

<hr>

<h2 id="overview">Tools overview</h2>

<p>
  Setiap tool dapat memiliki input, proses, dan output yang berbeda.
  Halaman tool biasanya terdiri dari struktur <code>HTML</code>,
  styling <code>CSS</code>, dan interaksi menggunakan
  <code>JavaScript</code>.
</p>

<h2 id="html">HTML</h2>

<p>
  HTML digunakan untuk membangun struktur dan elemen yang ditampilkan
  pada halaman tool.
</p>

<pre><code class="language-html">&lt;section class="tool-card"&gt;

  &lt;h2&gt;HTML Formatter&lt;/h2&gt;

  &lt;p&gt;
    Format HTML dengan cepat.
  &lt;/p&gt;

  &lt;textarea
    id="input"
    placeholder="Paste HTML here..."
  &gt;&lt;/textarea&gt;

  &lt;button id="run"&gt;
    Format HTML
  &lt;/button&gt;

&lt;/section&gt;
</code></pre>

<h3 id="heading">Heading</h3>

<p>
  Gunakan heading secara berurutan untuk menjaga struktur dokumen.
</p>

<pre><code class="language-html">&lt;h1&gt;Tools&lt;/h1&gt;

&lt;h2&gt;HTML&lt;/h2&gt;

&lt;h3&gt;Heading&lt;/h3&gt;

&lt;h4&gt;Sub heading&lt;/h4&gt;
</code></pre>

<h3 id="semantic-html">Semantic HTML</h3>

<p>
  Gunakan elemen HTML semantik seperti <code>main</code>,
  <code>section</code>, <code>article</code>, <code>header</code>,
  dan <code>footer</code>.
</p>

<pre><code class="language-html">&lt;main&gt;

  &lt;section&gt;

    &lt;article&gt;
      Content
    &lt;/article&gt;

  &lt;/section&gt;

&lt;/main&gt;
</code></pre>

<hr>

<h2 id="css">CSS</h2>

<p>
  CSS digunakan untuk mengatur tampilan, spacing, warna, typography,
  responsive layout, dan state dari sebuah tool.
</p>

<pre><code class="language-css">.tool-card {
  padding: 24px;

  background: var(--surface);

  border: 1px solid var(--border);
  border-radius: var(--radius);

  box-shadow: var(--shadow);
}
</code></pre>

<h3 id="css-variables">CSS variables</h3>

<p>
  Gunakan CSS variables agar warna dan komponen tetap konsisten
  dengan <code>global.css</code>.
</p>

<pre><code class="language-css">:root {
  --bg: #edf1f5;
  --surface: #ffffff;

  --text: #202124;
  --text-secondary: #5f6368;

  --border: #c7cdd1;
  --primary: #1a73e8;

  --radius: 14px;
}
</code></pre>

<p>
  Variable tersebut kemudian digunakan oleh komponen:
</p>

<pre><code class="language-css">.tool-card {
  color: var(--text);
  background: var(--surface);

  border: 1px solid var(--border);
  border-radius: var(--radius);
}
</code></pre>

<h3 id="responsive">Responsive layout</h3>

<p>
  Tool harus tetap nyaman digunakan pada desktop, tablet, dan mobile.
</p>

<pre><code class="language-css">.tool-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 24px;
}

@media (max-width: 768px) {

  .tool-grid {
    grid-template-columns: 1fr;
  }

}
</code></pre>

<hr>

<h2 id="javascript">JavaScript</h2>

<p>
  JavaScript digunakan untuk menangani interaksi pengguna dan proses
  data pada tool.
</p>

<pre><code class="language-js">const input =
  document.querySelector("#input");

const button =
  document.querySelector("#run");

const output =
  document.querySelector("#output");

button?.addEventListener("click", () => {

  const value =
    input?.value || "";

  output.textContent =
    value;

});
</code></pre>

<h3 id="event-listener">Event listener</h3>

<p>
  Event listener digunakan untuk merespons tindakan pengguna.
</p>

<pre><code class="language-js">button?.addEventListener(
  "click",
  () => {

    console.log("Tool executed");

  }
);
</code></pre>

<h3 id="validation">Input validation</h3>

<p>
  Selalu validasi input sebelum memproses data.
</p>

<pre><code class="language-js">function validateInput(value) {

  if (!value.trim()) {

    return {
      valid: false,
      message: "Input tidak boleh kosong."
    };

  }

  return {
    valid: true
  };
}
</code></pre>

<hr>

<h2 id="astro">Astro</h2>

<p>
  Komponen tool dapat dibuat menggunakan file
  <code>.astro</code>. Astro menangani rendering halaman,
  sedangkan JavaScript dapat digunakan hanya ketika interaksi
  memang diperlukan.
</p>

<pre><code class="language-astro">---
const title = "HTML Formatter";

const description =
  "Format HTML dengan cepat.";
---

<section class="tool-card">

  &lt;h2&gt;{title}&lt;/h2&gt;

  &lt;p&gt;
    {description}
  &lt;/p&gt;

  &lt;button&gt;
    Run Tool
  &lt;/button&gt;

&lt;/section&gt;
</code></pre>

<h3 id="astro-collections">Content collections</h3>

<p>
  Dokumentasi tools disimpan sebagai content collection pada
  <code>src/content/docs/</code>.
</p>

<pre><code class="language-text">src/
├── content/
│   └── docs/
│       └── tools.md
│
├── pages/
│   └── docs/
│       ├── index.astro
│       └── [...slug].astro
│
├── layouts/
│   └── MainLayout.astro
│
└── styles/
    ├── global.css
    └── docs.css
</code></pre>

<hr>

<h2 id="markdown">Markdown</h2>

<p>
  Dokumentasi dapat menggunakan Markdown untuk struktur konten,
  sementara HTML dapat digunakan ketika diperlukan kontrol yang
  lebih spesifik.
</p>

<ul>
  <li><strong>Bold</strong> digunakan untuk informasi penting.</li>
  <li><em>Italic</em> digunakan untuk penekanan.</li>
  <li><code>inline code</code> digunakan untuk nama kode atau property.</li>
</ul>

<h3 id="lists">Lists</h3>

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>Astro</li>
</ul>

<ol>
  <li>Masukkan data.</li>
  <li>Jalankan tool.</li>
  <li>Periksa hasil.</li>
  <li>Salin output.</li>
</ol>

<h3 id="table">Table</h3>

<table>
  <thead>
    <tr>
      <th>Technology</th>
      <th>Purpose</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>HTML</td>
      <td>Struktur halaman</td>
    </tr>

    <tr>
      <td>CSS</td>
      <td>Tampilan dan layout</td>
    </tr>

    <tr>
      <td>JavaScript</td>
      <td>Interaksi</td>
    </tr>

    <tr>
      <td>Astro</td>
      <td>Rendering dan routing</td>
    </tr>
  </tbody>
</table>

<hr>

<h2 id="accessibility">Accessibility</h2>

<p>
  Tool harus dapat digunakan dengan baik oleh pengguna dengan
  berbagai kebutuhan aksesibilitas.
</p>

<pre><code class="language-html">&lt;label for="input"&gt;
  Enter text
&lt;/label&gt;

&lt;input
  id="input"
  type="text"
  aria-describedby="input-help"
/&gt;

&lt;p id="input-help"&gt;
  Masukkan teks yang ingin diproses.
&lt;/p&gt;
</code></pre>

<h2 id="best-practices">Best practices</h2>

<ul>
  <li>Gunakan HTML semantik.</li>
  <li>Gunakan CSS variable untuk nilai yang digunakan berulang.</li>
  <li>Gunakan JavaScript hanya ketika diperlukan.</li>
  <li>Validasi input sebelum diproses.</li>
  <li>Buat layout responsive.</li>
  <li>Perhatikan accessibility.</li>
  <li>Gunakan pesan error yang jelas.</li>
  <li>Hindari JavaScript yang tidak diperlukan.</li>
</ul>

<hr>

<h2 id="summary">Summary</h2>

<p>
  Sebuah tool yang baik memiliki struktur yang jelas antara
  <code>HTML</code>, <code>CSS</code>, dan <code>JavaScript</code>.
  Astro digunakan untuk rendering dan struktur halaman, sedangkan
  content collection digunakan untuk mengelola dokumentasi.
</p>

<blockquote>
  Dokumentasi yang baik harus menjelaskan bukan hanya apa yang
  dilakukan sebuah tool, tetapi juga bagaimana cara menggunakannya.
</blockquote>
