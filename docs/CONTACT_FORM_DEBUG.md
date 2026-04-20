## STS Contact Form Debug

Endpoint used:
- `https://submit-form.com/rmvCA6Yil`

Field names submitted:
- `name`
- `company`
- `email`
- `phone`
- `issue`
- `systems`
- `privacy`
- `_honeypot`

Current submission flow:
- The real page form lives in `rebuild/contact/index.html`
- The script binds with `document.querySelector("[data-contact-form]")`
- Submission uses `new FormData(form)`
- The request is sent with:
  - `fetch(form.action, { method: "POST", body: formData, headers: { "Accept": "application/json" } })`

Temporary debug logs currently enabled:
- `console.log("Form found:", form)`
- `console.log("Form submit triggered")`
- `console.log("Submitting to:", form.action)`
- `console.log(pair[0], pair[1])` for every `FormData` entry
- `console.log("Response status:", response.status)`
- `console.log("Response body:", responseText)`

What was removed from the old broken logic:
- custom payload building
- field renaming
- redirect logic
- local URL generation
- `window.location` usage
- fake success handling

What to remove later after the form is confirmed stable:
- the temporary console logs
- the field-by-field `FormData` entry logging
- any extra debug-only comments or wording around submission diagnostics
