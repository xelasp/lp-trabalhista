# Landing Page — Advocacia Trabalhista

Landing page institucional para escritório de advocacia (área trabalhista), site estático (HTML + CSS + JS puro, sem build).

## Estrutura do projeto

```
lp-trabalhista/
├── index.html    # Página principal
├── style.css     # Estilos (extraídos do <style> original)
├── script.js     # Scripts (menu mobile, scroll-spy, reveal on scroll, etc.)
└── README.md
```

## Antes de publicar — personalizar

Procure e substitua no `index.html`:

- `Dra. [Nome Sobrenome]` → nome real da advogada
- `OAB/SP nº 000.000` → número real da OAB
- `https://wa.me/5511900000000` (aparece 2x) → número de WhatsApp real, formato `55DDDNÚMERO`
- `contato@exemplo.adv.br` → e-mail real
- `Rua Exemplo, 000 — São Paulo/SP` → endereço real
- Seção "Sobre" → foto real (trocar o placeholder `.portrait`) e bio real

## Rodando localmente

Não precisa de instalação nem build. Basta abrir o `index.html` no navegador, ou servir com qualquer servidor estático simples:

```bash
npx serve .
# ou
python3 -m http.server 8080
```

## Deploy no Cloudflare Pages via GitHub

### 1. Subir o projeto para o GitHub

```bash
cd lp-trabalhista
git init
git add .
git commit -m "Site inicial - landing page advocacia trabalhista"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/lp-trabalhista.git
git push -u origin main
```

### 2. Conectar no Cloudflare Pages

1. Acesse o [dashboard do Cloudflare](https://dash.cloudflare.com/) → **Workers & Pages** → **Create application** → aba **Pages** → **Connect to Git**.
2. Selecione o repositório `lp-trabalhista`.
3. Configurações de build (site é estático, sem build):
   - **Framework preset**: `None`
   - **Build command**: *(deixe em branco)*
   - **Build output directory**: `/` (raiz do projeto)
4. Clique em **Save and Deploy**.

Pronto — a cada `git push` na branch `main`, o Cloudflare Pages faz o deploy automático.

### 3. Domínio próprio (opcional)

Em **Workers & Pages → seu projeto → Custom domains**, adicione o domínio (ex.: `www.seusite.adv.br`) e siga as instruções de DNS (se o domínio já estiver na Cloudflare, a configuração é automática).

## Observações

- O rodapé exibe um aviso de conformidade com o **Provimento nº 205/2021** e o Código de Ética da OAB — mantenha esse texto, apenas ajuste os dados cadastrais.
- O ano no rodapé (`© <span id="ano">`) é atualizado automaticamente via JS.
