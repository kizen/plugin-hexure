# Hexure FireLight

A Kizen plugin app that connects Kizen to [Hexure FireLight](https://hexure.com/insurance-sales-software/), an insurance sales and e-application platform. Agents can log in to FireLight from the Kizen toolbar and start a new FireLight application straight from a Kizen contact, without re-typing the client's details.

## What it does

**SSO login** (`toolbarItems/ssoLogin`)

Adds a toolbar button that signs the current user in to FireLight. It fetches a FireLight auth token through Kizen, then posts that token to FireLight's SSO gateway so the user lands in an authenticated session.

**Start Application** (`actions/startApplication`)

A contact action that walks the user through creating a FireLight application:

1. Checks the contact's existing enrollments. If any application is already in the "Started" stage, it offers to resume one instead of creating a duplicate.
2. Prompts for a jurisdiction (US state), then loads the products available there.
3. Prompts for a product, grouped by carrier.
4. Maps the contact's Kizen fields (name, address, phone, email, DOB, gender, and so on) to FireLight data tags and creates the application.
5. Creates a related enrollment record back in Kizen so the application is tracked against the contact.
6. Redirects the user into the new application in FireLight.

Errors surface as toasts rather than uncaught exceptions.

## Configuration

The app reads a single config value:

- `environment` — one of `uat`, `staging`, or `production`. This selects which FireLight base URL the app talks to. If it is missing or invalid, the user sees an error toast and the action stops.

FireLight requests are proxied through Kizen's external-integration proxy, so the plugin does not hold FireLight credentials directly. The `hexure` service defined in `kizen.json` points at the FireLight quoting API.

## Project layout

```
src/
  thumbnail.png
  toolbarItems/ssoLogin/      SSO login button
  actions/startApplication/   Start-application contact action
releaseNotes/                 Per-version release notes
kizen.json                    Plugin manifest (name, version, services, config)
```

Each feature is a folder with a `config.json` (how it appears in Kizen) and a `script.js` (what it does when run).

## Releasing

Version and release metadata live in `kizen.json`. Release notes for each version go in `releaseNotes/<version>.md`. The plugin publishes from the `main` branch to the `dev` and `fmo` environments.
