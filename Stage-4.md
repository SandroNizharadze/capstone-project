# MemoryVault - User Interface Design Document

## Step 1: Define the Application Purpose

### Core Purpose
MemoryVault is a digital legacy management application that helps families preserve, organize, and share their memories across generations. The application serves as a secure, personal archive where users can store photos, videos, documents, and stories, then schedule their delivery to family members at meaningful future dates.

---

### Value Proposition
- **Preserve Family History**: Safeguard digital memories that might otherwise be lost
- **Connect Generations**: Bridge time gaps by delivering memories at significant moments
- **Simplify Legacy Planning**: Provide an intuitive way to pass down digital assets
- **Strengthen Family Bonds**: Share stories and memories that bring families closer together

## Step 2: Clarify Users' Objectives

### Primary User: Memory Keeper (Age 45-75)
**Primary Objectives:**
- Preserve important family memories and documents
- Share memories with family members at appropriate times
- Ensure family history is not lost when they pass away

**Basic Scenario: "Upload and Schedule a Memory"**
1. User logs into MemoryVault
2. User uploads a family photo from a recent vacation
3. User adds a description and story about the photo
4. User schedules the photo to be delivered to their children next Christmas
5. User confirms the scheduled delivery

**Advanced Scenario: "Create a Family Story Collection"**
1. User creates a new story titled "Grandpa's War Letters"
2. User uploads multiple documents (scanned letters, photos, newspaper clippings)
3. User writes connecting narrative between the items
4. User invites family members to contribute their own memories
5. User schedules the complete story to be shared on Veteran's Day
6. User sets up recurring annual delivery

### Secondary User: Family Member (Age 20-50)
**Primary Objectives:**
- View and enjoy received memories
- Contribute their own memories to family collections
- Stay connected with family history

**Basic Scenario: "View Received Memory"**
1. User receives email notification about delivered memory
2. User clicks link to view the memory in MemoryVault
3. User reads the story and views associated photos
4. User leaves a comment or reaction

## Step 3: Important Elements and Wireframes

### Key Elements Prioritization:
1. **Upload Area**: Easy drag-and-drop file upload
2. **Memory Timeline**: Visual representation of memories over time
3. **Scheduling Interface**: Simple calendar-based scheduling
4. **Family Management**: Add/manage family member access
5. **Story Creation**: Rich text editor for narratives
6. **Dashboard**: Overview of vault status and recent activity

### Page Structure:

#### 1. Dashboard (Home Page)
- Header: Logo, navigation, user profile
- Main Content: Recent memories, upcoming deliveries, storage usage
- Sidebar: Quick actions (Upload, Create Story, Schedule)

#### 2. Upload Page
- Large drop zone for files
- Form for title, description, tags
- Preview area for uploaded content
- Save/Schedule buttons

#### 3. Timeline View
- Chronological display of memories
- Filter options (date range, type, family member)
- Grid/list view toggle

#### 4. Story Creation
- Rich text editor
- Memory selection panel
- Story outline/chapter structure
- Collaboration tools

#### 5. Scheduling Interface
- Calendar view
- Memory selection
- Recipient management
- Delivery options

#### 6. Family Management
- Family member list
- Invitation interface
- Permission management
- Access history

## Step 4: Mockup Design Specifications

### Design System

#### Color Palette
- **Primary Blue**: #2C3E50 (trust, stability)
- **Warm Gold**: #F39C12 (memories, warmth)
- **Soft Gray**: #ECF0F1 (background, neutrality)
- **Success Green**: #27AE60 (confirmations)
- **Alert Red**: #E74C3C (warnings)
- **Text Dark**: #2C3E50
- **Text Light**: #7F8C8D

#### Typography
- **Headings**: Playfair Display (elegant, readable)
- **Body Text**: Open Sans (clean, web-friendly)
- **Interface**: Roboto (modern, consistent)

#### Visual Elements
- **Rounded corners**: 8px border radius
- **Shadows**: Soft drop shadows for depth
- **Icons**: Feather icon set for consistency
- **Spacing**: 8px grid system (8, 16, 24, 32px)

### Navigation Pattern
- **Primary Navigation**: Top horizontal bar
- **Breadcrumbs**: For deep navigation
- **Action Buttons**: Prominent, color-coded by importance
- **Side Panels**: For additional controls without losing context

## Step 5: Interactive Prototype Features

### Core Interactions

#### File Upload Flow
1. **Drag Detection**: Visual feedback when dragging files
2. **Upload Progress**: Progress bar with file details
3. **Preview Generation**: Automatic thumbnails/previews
4. **Form Auto-fill**: Extract metadata for title/description
5. **Success Confirmation**: Clear completion feedback

#### Scheduling Flow
1. **Calendar Interface**: Click to select dates
2. **Time Selection**: Simple dropdown for delivery time
3. **Recipient Selection**: Checkbox list with search
4. **Preview Mode**: Show how delivery will appear
5. **Confirmation**: Summary before final scheduling

#### Story Creation Flow
1. **Template Selection**: Choose from story templates
2. **Memory Browser**: Search and select memories to include
3. **Drag-and-Drop Ordering**: Rearrange story elements
4. **Rich Text Editing**: Format narrative content
5. **Collaboration Invitation**: Invite family members to contribute

### Responsive Behavior
- **Desktop**: Full sidebar navigation, multi-column layouts
- **Tablet**: Collapsible sidebar, adjusted spacing
- **Mobile**: Bottom navigation, single-column layout, touch-optimized controls

## Step 6: Prototype Testing Plan

### Usability Testing Scenarios

#### Test 1: First-time User Onboarding
- **Task**: Register account and upload first memory
- **Success Metrics**: Completion rate, time to complete, user satisfaction
- **Key Observations**: Confusion points, help-seeking behavior

#### Test 2: Memory Scheduling
- **Task**: Schedule existing memory for future delivery
- **Success Metrics**: Successful scheduling, understanding of delivery options
- **Key Observations**: Calendar usability, recipient selection clarity

#### Test 3: Story Creation
- **Task**: Create a story combining multiple memories
- **Success Metrics**: Story completion, narrative coherence
- **Key Observations**: Memory selection process, text editor usage

### Expected Issues and Solutions
- **Upload Confusion**: Add clearer visual cues and help text
- **Scheduling Complexity**: Simplify calendar interface, add presets
- **Family Management**: Streamline invitation process, better permission visualization

## Step 7: HTML/JS Implementation Requirements

### Technical Specifications

#### Frontend Structure
```
index.html          - Dashboard/Home page
upload.html         - File upload interface  
timeline.html       - Memory timeline view
story.html          - Story creation tool
schedule.html       - Scheduling interface
family.html         - Family management
```

#### Core JavaScript Functionality
- **File Upload**: HTML5 drag-and-drop API
- **Local Storage**: Persist user data for demonstration
- **Date Picker**: Calendar component for scheduling
- **Rich Text Editor**: Simple WYSIWYG for story creation
- **Modal Dialogs**: For confirmations and forms
- **Responsive Navigation**: Mobile-friendly menu system

#### CSS Framework Approach
- **CSS Grid/Flexbox**: Modern layout techniques
- **CSS Custom Properties**: Consistent design tokens
- **Mobile-First**: Progressive enhancement for larger screens
- **Component-Based**: Reusable CSS classes

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Responsive Design**: 320px - 1920px viewport range
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Accessibility**: WCAG 2.1 AA compliance

## Implementation Strategy

### Phase 1: Core Pages (Basic Scenario)
1. Create responsive HTML structure
2. Implement basic styling and navigation
3. Add file upload functionality
4. Build simple scheduling interface
5. Test basic user flow

### Phase 2: Enhanced Features (Advanced Scenario)
1. Add story creation tools
2. Implement family management
3. Create timeline visualization
4. Add advanced scheduling options
5. Test complete user journeys

### Phase 3: Polish and Testing
1. Refine visual design
2. Optimize performance
3. Cross-browser testing
4. Accessibility improvements
5. Final user testing

---

### How to test

Start your Spring Boot app and open the app at the root http://localhost:8080/

---