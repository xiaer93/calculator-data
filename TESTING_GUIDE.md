# BMI Calculator Testing Guide

Complete end-to-end testing guide for the BMI Calculator application.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Server Startup Instructions](#server-startup-instructions)
3. [Normal Case Testing](#normal-case-testing)
4. [Validation Testing](#validation-testing)
5. [Edge Case Testing](#edge-case-testing)
6. [Responsive Design Testing](#responsive-design-testing)
7. [Performance Testing](#performance-testing)
8. [Accessibility Testing](#accessibility-testing)

---

## Prerequisites

Before starting testing, ensure you have:

- Node.js 18+ installed
- pnpm 8+ installed
- All dependencies installed: `pnpm install`
- Modern web browser (Chrome, Firefox, Safari, or Edge)

---

## Server Startup Instructions

### 1. Start Development Environment

Open terminal in the project root directory:

```bash
# Navigate to project root
cd /Users/senguo/Desktop/better/orange_calculator

# Install dependencies (if not already done)
pnpm install

# Start development servers (both API and Web)
pnpm dev
```

### 2. Verify Services Are Running

The development environment will start two services:

- **Web Frontend**: http://localhost:3000
- **API Backend**: http://localhost:3001

Check your terminal output to confirm both services started successfully:

```
• UI in preparation...
• Remote UI cached
  ▲ Next.js 14.1.0
  - Local:        http://localhost:3000
  - Environments: .env.local

  ✓ Ready in 2.3s

• API in preparation...
• Remote UI cached
  [Nest] XXXXX  - Application successfully started
```

### 3. Access BMI Calculator

Open your browser and navigate to:

```
http://localhost:3000/calculators/bmi-calculator
```

You should see:
- Page title: "BMI Calculator"
- Description about BMI calculation
- Two input fields: Height and Weight
- A "Calculate BMI" button

---

## Normal Case Testing

### Test Case 1: Standard Adult Male

**Input:**
- Height: 175 cm
- Weight: 70 kg

**Steps:**
1. Enter `175` in the Height field
2. Enter `70` in the Weight field
3. Click "Calculate BMI" button
4. Wait for results to display

**Expected Results:**
- BMI Value: 22.86
- Category: "Normal weight"
- Color indicator: Green or blue (healthy range)
- No error messages
- Results appear within 1 second

**Validation:**
```
BMI = 70 / (1.75 × 1.75) = 70 / 3.0625 = 22.86
```

---

### Test Case 2: Standard Adult Female

**Input:**
- Height: 165 cm
- Weight: 55 kg

**Expected Results:**
- BMI Value: 20.20
- Category: "Normal weight"
- Color indicator: Green or blue

**Validation:**
```
BMI = 55 / (1.65 × 1.65) = 55 / 2.7225 = 20.20
```

---

## Validation Testing

### Test Case 3: Missing Height

**Input:**
- Height: (leave empty)
- Weight: 70

**Steps:**
1. Leave Height field empty
2. Enter `70` in Weight field
3. Click "Calculate BMI" button

**Expected Results:**
- Error message: "Height is required" or similar
- No calculation performed
- Error displayed near Height field or at top of form
- Visual indication of error (red border, red text)

---

### Test Case 4: Missing Weight

**Input:**
- Height: 175
- Weight: (leave empty)

**Expected Results:**
- Error message: "Weight is required" or similar
- No calculation performed
- Error displayed near Weight field

---

### Test Case 5: Negative Values - Height

**Input:**
- Height: -175
- Weight: 70

**Expected Results:**
- Error message: "Height must be positive" or similar
- No calculation performed

---

### Test Case 6: Negative Values - Weight

**Input:**
- Height: 175
- Weight: -70

**Expected Results:**
- Error message: "Weight must be positive" or similar
- No calculation performed

---

### Test Case 7: Zero Values - Height

**Input:**
- Height: 0
- Weight: 70

**Expected Results:**
- Error message: "Height must be greater than 0" or similar
- No calculation performed

---

### Test Case 8: Zero Values - Weight

**Input:**
- Height: 175
- Weight: 0

**Expected Results:**
- Error message: "Weight must be greater than 0" or similar
- No calculation performed

---

## Edge Case Testing

### Test Case 9: Extremely Tall Person

**Input:**
- Height: 250 cm (8'2")
- Weight: 150 kg

**Expected Results:**
- BMI Value: 24.00
- Category: "Normal weight"
- No errors or crashes
- Calculation handles extreme values correctly

---

### Test Case 10: Very Short Person

**Input:**
- Height: 100 cm (3'3")
- Weight: 20 kg

**Expected Results:**
- BMI Value: 20.00
- Category: "Normal weight"
- No errors
- Calculation handles very small values correctly

---

### Test Case 11: Maximum Realistic Height

**Input:**
- Height: 300 cm (9'10")
- Weight: 200 kg

**Expected Results:**
- BMI Value: 22.22
- Category: "Normal weight"
- System handles this edge case

**Note:** If the system has maximum limits, appropriate validation should trigger.

---

### Test Case 12: Minimum Realistic Weight

**Input:**
- Height: 150 cm
- Weight: 30 kg

**Expected Results:**
- BMI Value: 13.33
- Category: "Underweight" (if categories are implemented)
- No calculation errors

---

### Test Case 13: Severe Underweight

**Input:**
- Height: 175 cm
- Weight: 40 kg

**Expected Results:**
- BMI Value: 13.06
- Category: "Underweight" or "Severely underweight"
- Color indicator: Red or orange (warning)
- Appropriate health warning or information

---

### Test Case 14: Severe Overweight

**Input:**
- Height: 175 cm
- Weight: 120 kg

**Expected Results:**
- BMI Value: 39.18
- Category: "Obese" or "Class II obesity"
- Color indicator: Red or orange (warning)
- Appropriate health information displayed

---

### Test Case 15: Decimal Values

**Input:**
- Height: 172.5 cm
- Weight: 68.7 kg

**Expected Results:**
- BMI Value: 23.08 (rounded to 2 decimal places)
- Category: "Normal weight"
- Decimal values handled correctly

---

### Test Case 16: Category Boundary Values

**Test BMI = 18.5 (Underweight/Normal boundary):**

**Input:**
- Height: 170 cm
- Weight: 53.5 kg

**Expected Results:**
- BMI Value: 18.5
- Category: Should be classified correctly at boundary
- Clear indication of which category this belongs to

---

**Test BMI = 25 (Normal/Overweight boundary):**

**Input:**
- Height: 170 cm
- Weight: 72.3 kg

**Expected Results:**
- BMI Value: 25.0
- Category: Should be classified correctly at boundary

---

**Test BMI = 30 (Overweight/Obese boundary):**

**Input:**
- Height: 170 cm
- Weight: 86.7 kg

**Expected Results:**
- BMI Value: 30.0
- Category: Should be classified correctly at boundary

---

## Responsive Design Testing

### Test Case 17: Desktop View (1920×1080)

**Viewport:** 1920×1080 pixels

**Expected Layout:**
- Centered calculator container
- Adequate whitespace
- Form fields and button clearly visible
- Results section below form
- Content section readable with proper line width
- No horizontal scrolling

---

### Test Case 18: Laptop View (1366×768)

**Viewport:** 1366×768 pixels

**Expected Layout:**
- All elements visible without scrolling
- Proper spacing maintained
- Text readable without zooming

---

### Test Case 19: Tablet View (768×1024)

**Viewport:** 768×1024 pixels (portrait)

**Expected Layout:**
- Form fields stack vertically if needed
- Touch-friendly button size (minimum 44×44 pixels)
- Text remains readable
- No horizontal scrolling
- All content accessible

---

### Test Case 20: Mobile View (375×667)

**Viewport:** 375×667 pixels (iPhone SE)

**Expected Layout:**
- Single column layout
- Full-width input fields
- Large, tappable buttons
- Reduced font sizes if needed (but still readable)
- Minimal vertical scrolling
- Form labels above input fields
- Results section clearly separated

---

### Test Case 21: Small Mobile View (320×568)

**Viewport:** 320×568 pixels (iPhone 5)

**Expected Layout:**
- Optimized for small screens
- Essential content prioritized
- No horizontal scrolling
- Touch targets adequately sized
- Readable text sizes

---

## Performance Testing

### Test Case 22: Initial Page Load

**Steps:**
1. Clear browser cache
2. Navigate to: http://localhost:3000/calculators/bmi-calculator
3. Measure load time using browser DevTools (Network tab)

**Expected Results:**
- Time to Interactive (TTI): < 3 seconds
- First Contentful Paint (FCP): < 1.5 seconds
- Largest Contentful Paint (LCP): < 2.5 seconds
- All resources loaded successfully

---

### Test Case 23: Calculation Speed

**Steps:**
1. Fill in form fields
2. Click "Calculate BMI"
3. Measure time from click to result display

**Expected Results:**
- Results displayed within 500ms
- No visible lag or delay
- Smooth UI transition

---

### Test Case 24: Multiple Rapid Calculations

**Steps:**
1. Enter height: 175, weight: 70
2. Click Calculate
3. Immediately change to height: 180, weight: 80
4. Click Calculate again
5. Repeat 5-10 times rapidly

**Expected Results:**
- Each calculation completes successfully
- No UI freezing or hanging
- No memory leaks (browser DevTools Memory profiler)
- Previous results cleared before new ones shown

---

## Accessibility Testing

### Test Case 25: Keyboard Navigation

**Steps:**
1. Open BMI calculator page
2. Use Tab key to navigate through form
3. Use Enter/Space to activate buttons
4. Use Shift+Tab to navigate backwards

**Expected Results:**
- Tab order: Height → Weight → Calculate button
- Visible focus indicator on all interactive elements
- Enter key submits form when button has focus
- No keyboard traps

---

### Test Case 26: Screen Reader Compatibility

**Tools:** NVDA (Windows), VoiceOver (Mac), or JAWS

**Steps:**
1. Enable screen reader
2. Navigate to BMI calculator
3. Navigate through form fields
4. Submit form and check result announcement

**Expected Results:**
- Form fields have proper labels
- "Height" and "Weight" labels announced
- Button text "Calculate BMI" announced
- Results are announced when displayed
- Error messages are announced
- BMI value and category are readable

---

### Test Case 27: Color Contrast

**Tools:** Browser extension or online contrast checker

**Expected Results:**
- All text meets WCAG AA standard (4.5:1 for normal text)
- Large text meets WCAG AA standard (3:1)
- Form field borders have sufficient contrast
- Error messages are readable
- Color is not the only indicator (e.g., BMI category shown with text + color)

---

### Test Case 28: Touch Targets (Mobile)

**Expected Results:**
- All buttons minimum 44×44 pixels (iOS) or 48×48 pixels (Android)
- Input fields adequately sized for touch
- Sufficient spacing between interactive elements
- No accidental taps when trying to tap specific element

---

## Browser Compatibility Testing

### Test Case 29: Chrome (Latest)

**Steps:**
1. Open BMI calculator in Chrome
2. Run normal case test (Height: 175, Weight: 70)
3. Check for console errors (DevTools → Console)

**Expected Results:**
- All functionality works
- No console errors
- Consistent appearance

---

### Test Case 30: Firefox (Latest)

**Steps:**
1. Open BMI calculator in Firefox
2. Run normal case test
3. Check for console errors

**Expected Results:**
- All functionality works
- No console errors
- Appearance consistent with Chrome

---

### Test Case 31: Safari (macOS/iOS)

**Steps:**
1. Open BMI calculator in Safari
2. Run normal case test

**Expected Results:**
- All functionality works
- No layout issues
- Touch gestures work on iOS

---

### Test Case 32: Edge (Latest)

**Steps:**
1. Open BMI calculator in Edge
2. Run normal case test

**Expected Results:**
- All functionality works
- Consistent with other browsers

---

## Data Accuracy Testing

### Test Case 33: BMI Formula Verification

**Test Multiple Known Values:**

| Height (cm) | Weight (kg) | Expected BMI | Actual BMI | Match? |
|-------------|-------------|--------------|------------|--------|
| 170 | 70 | 24.22 | ? | Yes |
| 180 | 80 | 24.69 | ? | Yes |
| 160 | 50 | 19.53 | ? | Yes |
| 175 | 60 | 19.59 | ? | Yes |
| 165 | 65 | 23.88 | ? | Yes |

**Steps:**
1. For each row, enter height and weight
2. Calculate BMI
3. Verify actual BMI matches expected (±0.01)
4. Check category classification

---

## Error Recovery Testing

### Test Case 34: Invalid to Valid Transition

**Steps:**
1. Enter invalid values (e.g., height: -175, weight: 70)
2. Click Calculate
3. Verify error message appears
4. Correct height to valid value (175)
5. Click Calculate again

**Expected Results:**
- Initial error message displayed
- After correction, error message disappears
- Calculation completes successfully
- Results displayed correctly

---

### Test Case 35: Form Reset/Clear

**Steps:**
1. Fill in form with values
2. Calculate BMI
3. Clear form (if clear button exists) or refresh page
4. Verify form is empty

**Expected Results:**
- Form fields are empty
- No error messages
- Previous results cleared
- Form ready for new input

---

## Content Display Testing

### Test Case 36: About Section Rendering

**Steps:**
1. Scroll to "About This Calculator" section
2. Verify content displays correctly

**Expected Results:**
- Section heading visible
- Content renders properly (markdown converted to HTML)
- Any links or formatting in content display correctly
- No layout issues

---

## Security Testing

### Test Case 37: SQL Injection Prevention

**Input:**
- Height: `175; DROP TABLE users;--`
- Weight: 70

**Expected Results:**
- Input treated as string, not executed
- Appropriate validation error or sanitized input
- No system errors or crashes

---

### Test Case 38: XSS Prevention

**Input:**
- Height: `<script>alert('XSS')</script>`
- Weight: 70

**Expected Results:**
- Script not executed
- Input sanitized or validation error
- No alert boxes appear
- Safe handling of user input

---

## Summary Checklist

Use this checklist to track completed tests:

### Functionality
- [ ] Normal case: Height 175, Weight 70
- [ ] Normal case: Height 165, Weight 55
- [ ] Missing height validation
- [ ] Missing weight validation
- [ ] Negative values rejected
- [ ] Zero values rejected
- [ ] Extreme height handled
- [ ] Extreme weight handled
- [ ] Decimal values supported
- [ ] Boundary values classified correctly

### UI/UX
- [ ] Desktop layout (1920×1080)
- [ ] Laptop layout (1366×768)
- [ ] Tablet layout (768×1024)
- [ ] Mobile layout (375×667)
- [ ] Small mobile layout (320×568)
- [ ] Results display clearly
- [ ] Error messages visible
- [ ] Loading states (if applicable)

### Performance
- [ ] Initial load time acceptable
- [ ] Calculation speed fast
- [ ] Multiple calculations work smoothly
- [ ] No memory leaks

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast sufficient
- [ ] Touch targets adequate size

### Cross-Browser
- [ ] Chrome works
- [ ] Firefox works
- [ ] Safari works
- [ ] Edge works

### Data Integrity
- [ ] BMI formula accurate
- [ ] Category classification correct
- [ ] Rounding consistent

### Error Handling
- [ ] Invalid to valid transition works
- [ ] Error messages clear
- [ ] Form can be reset/cleared

---

## Test Results Template

Copy this template to document your test results:

```
Test Date: ________________
Tester: ________________
Browser: ________________
Device: ________________

PASSED TESTS:
-
-
-

FAILED TESTS:
-
-
-

ISSUES FOUND:
1.
2.
3.

OVERALL ASSESSMENT:
[ ] All tests passed - Ready for production
[ ] Minor issues found - Needs fixes before production
[ ] Major issues found - Significant work required

NOTES:
```

---

## Troubleshooting

### Issue: Development server won't start

**Solution:**
1. Check if ports 3000 and 3001 are available
2. Run `pnpm install` to ensure dependencies are installed
3. Check Node.js version: `node --version` (should be 18+)

### Issue: Page not found at /calculators/bmi-calculator

**Solution:**
1. Verify both web and api servers are running
2. Check for typos in URL
3. Clear browser cache and reload

### Issue: Calculation not working

**Solution:**
1. Open browser DevTools Console (F12)
2. Check for JavaScript errors
3. Verify API is responding: http://localhost:3001/health
4. Check network tab for failed requests

---

## Additional Notes

- This is a manual testing guide since automated end-to-end testing is not yet implemented
- For each test, document actual results vs expected results
- Take screenshots of any issues found
- Report bugs with detailed reproduction steps
- Consider using browser DevTools extensively during testing
- Test on real devices when possible, not just browser DevTools device emulation

---

**Last Updated:** 2026-04-13
**Version:** 1.0.0
**Project:** Orange Calculator - BMI Calculator
