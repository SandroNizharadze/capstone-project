# MemoryVault - Simplified Database Design and ER Diagram

This document provides a high-level overview of the **MemoryVault** database design, including entities, relationships, attributes, and cardinality.

---

## 1. Entity Identification

### Strong (Key) Entities
1. **USER** – Individuals using the system
2. **MEMORY_VAULT** – Main container for family memories
3. **MEMORY_ITEM** – All content (photos, videos, documents, audio)
4. **STORY** – Narrative collections of memories
5. **SCHEDULED_RELEASE** – Future delivery of content

### Weak Entities
6. **USER_PROFILE** – Personal information, dependent on USER

### Associative Entities
7. **VAULT_MEMBER** – Associates users with vaults and permissions
8. **STORY_CONTENT** – Associates memory items with stories

---

## 2. Relationships

### Primary Relationships
1. **USER owns MEMORY_VAULT**
2. **USER has USER_PROFILE**
3. **MEMORY_VAULT contains MEMORY_ITEM**
4. **USER creates STORY**
5. **USER accesses MEMORY_VAULT** (via VAULT_MEMBER)
6. **STORY includes MEMORY_ITEM** (via STORY_CONTENT)
7. **USER schedules SCHEDULED_RELEASE**
8. **SCHEDULED_RELEASE delivers MEMORY_ITEM**

### Cardinality & Ordinality
| Relationship | Cardinality | Ordinality |
|--------------|------------|-----------|
| USER owns MEMORY_VAULT | 1:1 | USER (1,1) – MEMORY_VAULT (1,1) |
| USER has USER_PROFILE | 1:1 | USER (1,1) – USER_PROFILE (0,1) |
| MEMORY_VAULT contains MEMORY_ITEM | 1:M | MEMORY_VAULT (1,1) – MEMORY_ITEM (0,N) |
| USER creates STORY | 1:M | USER (1,1) – STORY (0,N) |
| USER accesses MEMORY_VAULT | M:N | USER (0,N) – MEMORY_VAULT (1,N) |
| STORY includes MEMORY_ITEM | M:N | STORY (1,N) – MEMORY_ITEM (0,N) |
| USER schedules SCHEDULED_RELEASE | 1:M | USER (1,1) – SCHEDULED_RELEASE (0,N) |
| SCHEDULED_RELEASE delivers MEMORY_ITEM | M:N | SCHEDULED_RELEASE (1,N) – MEMORY_ITEM (0,N) |

---

## 3. Entity Attributes

### Strong Entities
**USER**
- user_id (PK, INT AUTO_INCREMENT)
- email (VARCHAR(255), unique)
- password_hash (VARCHAR(255))
- first_name, last_name (VARCHAR(100))
- registration_date (TIMESTAMP)
- is_active (BOOLEAN)
- total_files (Derived INT)

**MEMORY_VAULT**
- vault_id (PK, INT AUTO_INCREMENT)
- owner_user_id (FK)
- vault_name (VARCHAR(200))
- description (TEXT)
- creation_date (TIMESTAMP)
- is_memorial_mode (BOOLEAN)

**MEMORY_ITEM**
- item_id (PK)
- vault_id (FK), uploader_user_id (FK)
- item_type (ENUM: PHOTO, VIDEO, DOCUMENT, AUDIO)
- title (VARCHAR(300)), description (TEXT)
- file_path (VARCHAR(500)), file_size (BIGINT)
- upload_date (TIMESTAMP), is_private (BOOLEAN)

**STORY**
- story_id (PK)
- vault_id (FK), creator_user_id (FK)
- story_title (VARCHAR(300)), story_content (LONGTEXT)
- creation_date (TIMESTAMP), item_count (Derived INT)

**SCHEDULED_RELEASE**
- release_id (PK)
- scheduler_user_id (FK), vault_id (FK)
- release_title (VARCHAR(300)), release_message (TEXT)
- scheduled_date (DATETIME), recipient_emails (TEXT)
- is_executed (BOOLEAN), creation_date (TIMESTAMP)

### Weak Entity
**USER_PROFILE**
- profile_id (PK)
- user_id (FK / Partial Key)
- bio (TEXT), phone_numbers (TEXT)
- profile_picture_path (VARCHAR(500))
- date_of_birth (DATE), last_updated (TIMESTAMP)

### Associative Entities
**VAULT_MEMBER**
- membership_id (PK)
- user_id (FK), vault_id (FK)
- access_level (ENUM: OWNER, CONTRIBUTOR, VIEWER)
- relationship_type (VARCHAR(50))
- join_date (TIMESTAMP), is_active (BOOLEAN)

**STORY_CONTENT**
- content_id (PK)
- story_id (FK), item_id (FK)
- display_order (INT), caption (TEXT)
- added_date (TIMESTAMP)

---

## 4. Entity Summary

- **Total Entities:** 8
- **Strong Entities:** 5 (USER, MEMORY_VAULT, MEMORY_ITEM, STORY, SCHEDULED_RELEASE)
- **Weak Entities:** 1 (USER_PROFILE)
- **Associative Entities:** 2 (VAULT_MEMBER, STORY_CONTENT)

---