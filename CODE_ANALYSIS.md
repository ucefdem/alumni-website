# Code Structure Analysis & Recommendations

## 📊 Current State Analysis

### ✅ What's Working Well
- Good component-based structure (`.card`, `.section-heading`, `.btn`)
- CSS variables are well-organized
- Clear section separation

### ⚠️ Issues Found

## 1. DUPLICATE CSS PATTERNS

### Pattern 1: Identical Leaiiba Styles
**Found in:**
- `.mission .section-heading .leaiiba` (lines 769-777)
- `.board .section-heading .leaiiba` (lines 929-937)

**Recommendation:** Create unified class `.section-heading .leaiiba--horizontal`

### Pattern 2: Similar Title Grid Styles
**Found in:**
- `.big-title-one-grid` (lines 644-651)
- `.big-title-two-grid` (lines 690-696)

**Shared properties:**
- `font-family: "bizantheum"`
- `text-transform: uppercase`
- `font-size: var(--font-size-2xl)`
- `color: var(--color-text-primary)`

**Recommendation:** Create base class `.title-grid` with modifiers

### Pattern 3: Repeated Flex Patterns
**Found in:**
- `.bottom-section` (lines 531-536)
- `.submit-wrap` (lines 902-906)
- `.social-media` (lines 552-554)

**Recommendation:** Use utility class `.flex-between`

## 2. MISSING UTILITY CLASSES

### Position Utilities
```css
.position-relative { position: relative; }
.position-absolute { position: absolute; }
.position-fixed { position: fixed; }
```

### Width Utilities
```css
.w-full { width: 100%; }
.w-fit { width: fit-content; }
```

### Font Family Utilities
```css
.font-bizantheum { font-family: "bizantheum"; }
```

### Common Flex Patterns
```css
.flex-between-center { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
}
```

### Grid Column Utilities
```css
.grid-col-span-2 { grid-column: 1 / 3; }
.grid-col-span-4 { grid-column: 1 / 4; }
```

## 3. HTML CLASS CHANGES

### Classes to ADD:
1. **`.text-white`** → Replace `.white` class (line 83)
2. **`.flex-between`** → Can be added to `.bottom-section`, `.submit-wrap`
3. **`.font-bizantheum`** → Can be added to title grids
4. **`.position-relative`** → Can be added to many elements

### Classes to REMOVE:
1. **`.white`** → Replace with `.text-white` utility
2. **Redundant nested classes** → Some can be simplified

### Classes to KEEP:
- `.hide` - Used for animations (JavaScript)
- `.getHover` - Used for cursor effects (JavaScript)
- `.light` - Theme modifier
- `.w-100` - Already a utility
- Component classes (`.card`, `.section-heading`, etc.)

## 4. CSS CONSOLIDATION OPPORTUNITIES

### Opportunity 1: Unified Section Heading Leaiiba
**Current:**
```css
.mission .section-heading .leaiiba { ... }
.board .section-heading .leaiiba { ... }
```

**Recommended:**
```css
.section-heading .leaiiba--horizontal {
  flex-direction: row;
  width: initial;
  height: 1.5rem;
  margin-top: 0;
  margin-bottom: 0.35em;
  padding-right: 0.2em;
  padding-left: 0;
}
```

### Opportunity 2: Base Title Grid Class
**Current:**
```css
.big-title-one-grid { ... }
.big-title-two-grid { ... }
```

**Recommended:**
```css
.title-grid {
  font-family: "bizantheum";
  text-transform: uppercase;
  font-size: var(--font-size-2xl);
  color: var(--color-text-primary);
}

.title-grid--one { padding-top: var(--spacing-8xl); padding-left: var(--spacing-3xl); }
.title-grid--two { padding-left: var(--spacing-lg); }
```

### Opportunity 3: Common Grid Patterns
**Current:** Multiple grid declarations scattered

**Recommended:** Create grid utility classes

## 5. RECOMMENDED ACTIONS

### Priority 1 (High Impact):
1. ✅ Add position utilities
2. ✅ Add font-family utilities  
3. ✅ Consolidate duplicate leaiiba styles
4. ✅ Replace `.white` with `.text-white`

### Priority 2 (Medium Impact):
1. ✅ Create base `.title-grid` class
2. ✅ Add flex utility classes
3. ✅ Add width utilities

### Priority 3 (Low Impact):
1. ✅ Add more spacing utilities
2. ✅ Add text alignment utilities
3. ✅ Add display utilities

## 6. IMPLEMENTATION PLAN

### Step 1: Add Utility Classes to CSS
### Step 2: Update HTML to use new utilities
### Step 3: Consolidate duplicate CSS
### Step 4: Remove redundant classes from HTML

