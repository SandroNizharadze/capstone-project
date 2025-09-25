# MemoryVault - Requirements and Use Case Design Document

This document provides a comprehensive overview of the **MemoryVault** system, covering functional and non-functional requirements, detailed use cases, and object/class design for implementation.

---

## 1. System Requirements

### 1.1 Functional Requirements

#### 1.1.1 User Management
- **FR-001**: Users can register with email and password  
- **FR-002**: Secure authentication for users  
- **FR-003**: Support user profiles with personal info  
- **FR-004**: Users can invite family members to their vault  
- **FR-005**: Multiple roles supported: Owner, Contributor, Viewer, Memorial Trustee  

#### 1.1.2 Content Management
- **FR-006**: Upload photos, videos, audio, and documents  
- **FR-007**: Support multiple file formats (JPEG, PNG, MP4, MP3, PDF, DOCX)  
- **FR-008**: Extract metadata automatically (date, location, device info)  
- **FR-009**: Add descriptions, tags, and stories  
- **FR-010**: Organize content into categories  
- **FR-011**: Batch upload supported  
- **FR-012**: Edit or delete content by authorized users  

#### 1.1.3 Legacy Timeline & Scheduling
- **FR-018**: Schedule content delivery for future dates  
- **FR-019**: Support recurring patterns (annual, monthly)  
- **FR-020**: Send notifications for scheduled releases  
- **FR-021**: Create timeline milestones  
- **FR-022**: Conditional releases based on events  

#### 1.1.4 Story Weaving
- **FR-023**: Create narratives connecting content items  
- **FR-024**: Provide story templates  
- **FR-025**: Collaborative storytelling support  
- **FR-026**: Auto-generate story timelines  
- **FR-027**: Support rich text formatting  

#### 1.1.5 Access Control & Permissions
- **FR-028**: Granular permissions per content item  
- **FR-029**: Time-based content access  
- **FR-030**: Viewer permissions by family member  
- **FR-031**: Group permissions for family circles  
- **FR-032**: Inheritance permissions for new content  

#### 1.1.6 Memorial Mode
- **FR-033**: Auto-activate memorial mode  
- **FR-034**: Notify designated trustees  
- **FR-035**: Follow pre-configured sharing rules  
- **FR-036**: Prevent unauthorized modifications  
- **FR-037**: Allow memorial tributes  

#### 1.1.7 Search & Discovery
- **FR-038**: Full-text search across all content  
- **FR-039**: Filter by date, type, person, tags  
- **FR-040**: Advanced multi-criteria search  
- **FR-041**: Search suggestions and auto-complete  
- **FR-042**: Maintain search history  

---

### 1.2 Non-Functional Requirements

#### 1.2.1 Performance
- **NFR-001**: Dashboard loads within 3s  
- **NFR-002**: Support uploads up to 2GB  
- **NFR-003**: Concurrent access up to 1000 users  
- **NFR-004**: Search results within 2s  
- **NFR-005**: 99.5% uptime  

#### 1.2.2 Security
- **NFR-006**: HTTPS/TLS 1.3 encryption  
- **NFR-007**: Passwords hashed with bcrypt  
- **NFR-008**: Multi-factor authentication  
- **NFR-009**: AES-256 encryption for sensitive content  
- **NFR-010**: Log all access and changes  
- **NFR-011**: 30-min session timeout  
- **NFR-012**: GDPR compliance  

#### 1.2.3 Scalability
- **NFR-013**: Horizontal scaling for web servers  
- **NFR-014**: Database read replicas  
- **NFR-015**: File storage scalable to petabytes  
- **NFR-016**: Handle 10,000 concurrent uploads  

#### 1.2.4 Usability
- **NFR-017**: Responsive UI for desktop, tablet, mobile  
- **NFR-018**: Accessibility compliant (WCAG 2.1 AA)  
- **NFR-019**: Maximum 3 clicks to reach any feature  
- **NFR-020**: Clear error messages and guidance  
- **NFR-021**: Drag-and-drop upload  

#### 1.2.5 Reliability
- **NFR-022**: Daily backups  
- **NFR-023**: Data recovery within 24h  
- **NFR-024**: Disaster recovery procedures  
- **NFR-025**: Failover for critical functions  

#### 1.2.6 Compatibility
- **NFR-026**: Modern browsers (Chrome, Firefox, Safari, Edge)  
- **NFR-027**: iOS and Android support  
- **NFR-028**: Legacy file format support  
- **NFR-029**: Standard data export formats  

---

## 2. Use Case Design

### 2.1 Primary Actors
- **Memory Keeper**: Manages vault and content  
- **Family Member**: Views and contributes content  
- **Memorial Trustee**: Manages vault post-owner passing  
- **System Administrator**: Maintains platform  

### 2.2 Core Use Cases
- **UC-001**: Register Account  
- **UC-002**: Upload Content  
- **UC-003**: Schedule Content Release  
- **UC-004**: Create Memory Story  
- **UC-005**: Manage Family Access  
- **UC-006**: Search Memories  
- **UC-007**: Activate Memorial Mode  

### 2.3 Secondary Use Cases
- **UC-008**: Configure Privacy Settings  
- **UC-009**: Export Memory Collection  
- **UC-010**: Receive Scheduled Memory  
- **UC-011**: Contribute to Shared Story  
- **UC-012**: Manage Storage Quota  

---

## 3. Object, Class, and Relationship Identification

### 3.1 Core Domain Objects
- **User / MemoryKeeper / FamilyMember / MemorialTrustee**  
- **Profile / Role / Session / Invitation**  
- **MemoryVault / MemoryItem / Photo / Video / Document / AudioFile / Metadata / Tag**  
- **Story / Collection / Timeline / Category**  
- **ScheduledRelease / DeliveryRule / Notification / RecurrencePattern**  
- **Permission / AccessRule / FamilyCircle / ShareSettings**  
- **MemorialMode / MemorialTrustee / Tribute / LegacyWish**  

### 3.2 Key Relationships
- User **owns** MemoryVault (1:1)  
- MemoryVault **contains** MemoryItem (1:many)  
- MemoryItem **has** Metadata and Tags  
- Story **includes** MemoryItem  
- User **has** Permission; Permission **applies to** MemoryItem  
- ScheduledRelease **delivers** MemoryItem; follows RecurrencePattern  

### 3.3 CRC Cards (Sample)
**User**  
- Responsibilities: Authentication, manage profile, invite family, set privacy  
- Collaborators: Profile, Role, MemoryVault, Session, MemoryItem  

**MemoryVault**  
- Responsibilities: Store memories, manage access, enforce rules, memorial transitions  
- Collaborators: User, MemoryItem, FamilyCircle, AccessRule, MemorialMode  

**MemoryItem**  
- Responsibilities: Store content/metadata, versioning, access, tagging, search  
- Collaborators: User, Metadata, Tag, AccessRule, Collection, Story  

**ScheduledRelease**  
- Responsibilities: Manage delivery, execute rules, notifications, recurring schedules  
- Collaborators: MemoryItem, User, DeliveryRule, Notification, RecurrencePattern  

**Story**  
- Responsibilities: Connect memories, chronological order, collaborative editing  
- Collaborators: MemoryItem, User, Timeline, ShareSettings  

---

## 4. Class Diagram Concepts

### 4.1 Inheritance Hierarchy

MemoryItem (Abstract)

├── Photo\
├── Video\
├── Document\
└── AudioFile

User (Abstract)\
├── MemoryKeeper\
├── FamilyMember\
└── MemorialTrustee\


AccessRule (Abstract)\
├── TimeBasedRule\
├── RoleBasedRule\
└── ContentBasedRule

### 4.2 Key Attributes
**User**: userId, email, passwordHash, firstName, lastName, dateOfBirth, registrationDate, lastLoginDate, isActive  
**MemoryVault**: vaultId, ownerId, vaultName, description, creationDate, isMemorialMode, storageUsed, storageLimit  
**MemoryItem**: itemId, vaultId, uploaderId, title, description, uploadDate, fileSize, filePath, contentType, isPublic  
**ScheduledRelease**: releaseId, itemId, schedulerId, deliveryDate, recipientIds, message, isRecurring, status, creationDate  

---