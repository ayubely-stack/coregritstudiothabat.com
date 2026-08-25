# Privacy Policy — Ai File Recovery

**Effective Date:** August 25, 2026  
**Application Name:** Ai File Recovery  
**Package Identifier:** `com.coregritstudio.aifilerecovery`  
**Developer:** CoreGrit Studio  
**Support Email:** `filerecovery-ai@coregritstudio.com`  

---

## 1. Overview & Core Purpose
CoreGrit Studio built **Ai File Recovery** as a local, on-device utility application. We recognize that your photos, videos, audios, documents, and contacts are deeply personal.

### 🔒 100% On-Device Processing Guarantee
All file discovery routines, deleted cache scanners, thumbnail indices, and file restorations execute **100% locally on your smartphone**. We do not operate remote file storage servers, and we **never** collect, upload, transmit, share, sell, or inspect your personal files.

---

## 2. Android System Permissions & Exact Usage

To deliver file recovery services, the application requests the following Android runtime permissions:

### A. All Files Access (`MANAGE_EXTERNAL_STORAGE` / `READ_EXTERNAL_STORAGE` / `WRITE_EXTERNAL_STORAGE`)
- **Purpose:** Core File Recovery (Backup & Restore).
- **Justification:** Required exclusively to traverse deep device storage directories, system cache directories, hidden trash directories (`.Trash`), and unindexed sectors to locate accidentally deleted or lost photos, videos, audios, and documents, and to restore selected items back to device storage under `/Download/Restored_Files/` upon your explicit request.

### B. Granular Media Permissions (`READ_MEDIA_IMAGES`, `READ_MEDIA_VIDEO`, `READ_MEDIA_AUDIO`)
- **Purpose:** Media indexation and preview.
- **Justification:** On Android 13 (API 33) and newer, these permissions allow the application to display recovered media thumbnails so you can visually verify and preview files prior to restoration.

### C. Contacts Permissions (`READ_CONTACTS`, `WRITE_CONTACTS`)
- **Purpose:** Local Contacts Recovery.
- **Justification:** Utilized solely when you intentionally open the "Contacts Recovery" module to scan for recoverable `.vcf` backup files and re-import selected contacts directly into your local Android address book.

### D. Notification Permission (`POST_NOTIFICATIONS`)
- **Purpose:** Background completion alerts.
- **Justification:** Sends a local device notification when a long-running scan or restoration batch finishes.

---

## 3. Google Play Data Safety Section Compliance

| Data Safety Field | Status | Detail |
| :--- | :--- | :--- |
| **Data Collection** | **No** | No personal files, documents, photos, or contacts are collected. |
| **Data Shared with 3rd Parties** | **No** | Personal data is never shared with third-party brokers or partners. |
| **Data Encryption in Transit** | **N/A** | Personal files are never transmitted across networks. |
| **Data Deletion Request** | **Supported** | Uninstalling the app purges all local cache and scan indices immediately. |

---

## 4. Third-Party Services & Advertising

To provide free deep scanning and restoration capabilities, the application integrates **Google AdMob** (Google LLC):
- **Ad Formats:** Banner ads, Interstitial ads, and Rewarded video ads.
- **AdMob Telemetry:** AdMob may collect pseudonymous device diagnostic identifiers (such as Google Advertising ID / GAID), coarse device metrics, and ad interaction telemetry in compliance with Google's Privacy Policy.
- **Google Privacy Policy:** [https://policies.google.com/technologies/ads](https://policies.google.com/technologies/ads)

---

## 5. Children's Privacy (COPPA)
Ai File Recovery is a general audience tool and does not target or knowingly collect personal information from children under the age of 13.

---

## 6. User Control & Rights
- **Revoking Permissions:** You can revoke storage or contacts permissions at any time via `Android Settings > Apps > Ai File Recovery > Permissions`.
- **Restored Files:** All recovered files are saved into your public device folder `/Download/Restored_Files/` where you can view, backup, or delete them freely.

---

## 7. Contact Information
If you have any questions or feedback regarding this Privacy Policy, please reach out to:
- **Developer:** CoreGrit Studio
- **Email:** `filerecovery-ai@coregritstudio.com`
