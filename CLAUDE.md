# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Language & Communication Requirements

### Japanese Language Support
- **User Communication**: All responses to users must be in Japanese (日本語) for optimal user understanding
- **Internal Processing**: AI may use any language during research and thinking processes if it improves response accuracy
- **Documentation**: Technical documentation and code comments may be in English or Japanese as appropriate
- **Error Messages**: All error messages in code (throw new Error(), console.error(), user-facing messages, etc.) must be in Japanese for Japanese native speakers, as this project is primarily targeted at Japanese users

## MCP Integration Requirements

⚠️ **Required: Serena MCP Integration**

When using Claude Code assistant, the following MCP (Model Context Protocol) integration requirements must be followed:

- **Standard Processing**: All processing tasks should use Serena MCP as the primary processing framework
- **MCP Priority**: Complex processing, data operations, and external integrations should prioritize Serena MCP usage
- **Fallback Behavior**: Only use alternative processing methods when Serena MCP is unavailable or clearly inappropriate
- **Consistency**: Maintain consistent MCP integration patterns throughout development

### Serena MCP Benefits:
- Enhanced processing capabilities and performance
- Standardized workflow management and task execution
- Improved reliability and error handling
- High compatibility with project-specific requirements and constraints

### Recommended Serena MCP Usage Scenarios:

**Code Search & Analysis (Priority Usage):**
- `mcp_serena_find_symbol`: Search for functions, classes, variable definitions
- `mcp_serena_search_for_pattern`: Search for specific code patterns
- `mcp_serena_find_file`: Search by filename and extension
- Cross-file investigation and analysis

**Large-scale Refactoring (Priority Usage):**
- `mcp_serena_replace_symbol_body`: Symbol-level replacements
- `mcp_serena_insert_after_symbol` / `mcp_serena_insert_before_symbol`: Code insertions
- Project-wide structural changes

**Project Understanding & Investigation (Priority Usage):**
- `mcp_serena_list_dir`: Understanding directory structures
- `mcp_serena_get_symbols_overview`: Codebase overview
- Dependency analysis

**Work Memory Persistence (Priority Usage):**
- `mcp_serena_write_memory`: Recording important work content
- `mcp_serena_read_memory`: Referencing past work content
- Maintaining long-term project continuity

**Standard Tool Usage Examples:**
- Simple file read/write operations (Read/Write/Edit)
- Task management (TodoWrite)
- Browser operations (Playwright MCP)
- Web search/fetch (WebSearch/WebFetch)
- Temporary single-file operations

Following these requirements ensures optimal development workflow and consistency with project processing standards.

## Generic Naming Convention Rules

### Critical Protocol: Avoid Project-Specific Identifiers

#### Rule 1: Generic Documentation and Comments
- **Avoid Project-Specific Names**: When creating documentation, user-facing explanations, or comments, avoid using project-specific company names or case-specific identifiers
- **Use Industry-Standard Terms**: Prefer commonly used generic terms in web development industry
- **Universal Applicability**: Content should be applicable to similar projects without requiring name changes

#### Rule 2: Generic Function and Class Naming
- **Avoid Case-Specific Identifiers**: When naming functions, classes, variables, or other configurable system elements, avoid incorporating project-specific company names
- **Use Descriptive Generic Names**: Choose names that describe functionality rather than project identity
- **Popular Naming Patterns**: Adopt naming conventions commonly used in web development projects

#### Rule 3: Maintainability and Reusability
- **Code Portability**: Ensure code can be easily adapted to other projects without extensive renaming
- **Generic Documentation**: Create documentation that serves as a template for similar projects
- **Industry Best Practices**: Follow established naming conventions in web development community

### Implementation Examples
```php
// Avoid project-specific naming
function projectname_contact_form() { ... } // ❌
function companyname_send_email() { ... }   // ❌

// Prefer generic descriptive naming
function handle_contact_form() { ... }      // ✅
function process_contact_submission() { ... } // ✅
function send_inquiry_email() { ... }        // ✅
```

```markdown
<!-- Avoid project-specific documentation -->
# ProjectName Contact Form Setup
# CompanyName Theme Configuration

<!-- Prefer generic documentation -->
# Contact Form Setup Guide
# Theme Configuration Guide
```

## Development Best Practices Rules

### Critical Protocol: Code Quality and System Preservation

#### Rule 1: Code Architecture and Design Principles
- **Single Responsibility Principle**: Keep function processing to a minimum, ensure each function has a single, well-defined responsibility
- **Loosely Coupled Structure**: Maintain loose coupling between UI components (modules) and logic processing functions
- **Minimal Function Scope**: Design functions to perform specific, focused tasks rather than multiple operations
- **Modular Architecture**: Create reusable, independent components that can be easily maintained and tested

#### Rule 2: Frontend Preservation Protocol
- **Explicit Permission Required**: Never modify or destroy existing frontend visual elements without explicit user request in the prompt
- **Visual Integrity Protection**: Preserve existing design, layout, and styling unless specifically instructed to change
- **Non-Destructive Approach**: When making backend changes, ensure frontend appearance remains unchanged unless requested
- **User Experience Continuity**: Maintain consistent user interface behavior and appearance

#### Rule 3: Environment File Handling Rules
- **Assume .env Existence**: Even if .env file is not found during project search, assume it exists and proceed accordingly
- **No Automatic .env Creation**: Never attempt to create new .env files without explicit instruction
- **Use .env.example as Substitute**: When .env modifications are needed, use .env.example file as a stand-in for demonstration purposes
- **.env Invisibility Assumption**: Acknowledge that .env files may not be visible to AI due to security restrictions, but assume their presence

#### Rule 4: Console Logging and Debug Code Management
- **Default Prohibition**: Do not add console.log or console.error statements unless explicitly requested for debugging purposes or explicitly mentioned in user prompts
- **Code Readability Priority**: Console logging statements reduce code readability and should be avoided in production code
- **Security Risk Awareness**: console.log(), console.error(), console.warn() are visible to anyone using browser developer tools (F12) in production environments, potentially exposing technical details to malicious actors
- **Verification Protocol**: When console verification is needed to confirm system functionality:
  - Request user confirmation of console output to verify implementation
  - Upon confirmation that implementation works correctly, immediately remove all console-related statements
  - Perform cleanup to maintain clean, production-ready code
- **Exception Handling**: console.error and console.warn may be retained only for critical error handling in production environments where user-facing error messages are necessary

#### Rule 5: Security-First Error Handling
- **No Technical Details in Errors**: Never expose technical implementation details, file paths, system information, or stack traces to end users or browser console in production code
- **Generic Error Messages**: Use generic, user-friendly error messages that provide no exploitable information (e.g., "処理に失敗しました" instead of "Failed to connect to database at /var/www/config/db.php")
- **No Fallback to Insecure Defaults**: When critical initialization fails (e.g., unable to detect required paths), throw an error and stop execution rather than falling back to potentially incorrect or insecure default values
- **Fail Securely**: If a security-critical operation fails, the system should fail in a secure state (e.g., form doesn't initialize) rather than proceeding with compromised security

### Implementation Examples

```javascript
// ❌ Avoid: Multiple responsibilities in one function
function handleUserContactAndValidateAndSend(data) {
  // validation logic
  // email sending logic
  // database storage logic
  // response formatting logic
}

// ✅ Prefer: Single responsibility, loosely coupled
function validateContactForm(data) { /* validation only */ }
function sendContactEmail(data) { /* email sending only */ }
function storeContactData(data) { /* database storage only */ }
function formatApiResponse(data) { /* response formatting only */ }
```

```php
// ❌ Avoid: Modifying existing frontend without permission
function update_theme_styles() {
  // Changing existing CSS classes or layout
  wp_enqueue_style('new-style', 'style-that-changes-appearance.css');
}

// ✅ Prefer: Adding functionality without visual changes
function register_custom_post_type() {
  // Adding backend functionality only
  register_post_type('portfolio', [/* configuration */]);
}
```

```bash
# ❌ Avoid: Creating .env when not found
touch .env
echo "DATABASE_URL=mysql://..." >> .env

# ✅ Prefer: Document in .env.example
echo "# Add this to your .env file:" >> .env.example
echo "DATABASE_URL=mysql://localhost/dbname" >> .env.example
```

```typescript
// ❌ Avoid: Adding debug console logs without explicit request
export class UserService {
  async fetchUser(id: string) {
    console.log('Fetching user:', id);  // Reduces readability
    const user = await api.get(`/users/${id}`);
    console.log('User data:', user);     // Debug noise
    return user;
  }
}

// ✅ Prefer: Clean code without debug logs
export class UserService {
  async fetchUser(id: string) {
    const user = await api.get(`/users/${id}`);
    return user;
  }
}

// ✅ Exception: Critical error handling only
export class UserService {
  async fetchUser(id: string) {
    try {
      const user = await api.get(`/users/${id}`);
      return user;
    } catch (error) {
      console.error('Failed to fetch user:', error);  // Critical error - OK to keep
      throw error;
    }
  }
}

// ✅ Temporary debugging workflow (with cleanup):
// 1. Add console.log temporarily for verification
console.log('Testing new feature...');

// 2. Request user to verify console output
// 3. Upon confirmation, immediately remove:
// console.log('Testing new feature...');  // ← Remove after verification
```

## File Modification Security Rules

### Critical Security Protocol: Default Read-Only Mode

#### Rule 1: Default Read-Only Operations Only
- **Default Behavior**: Prohibit ALL file and directory modifications, deletions, and destructive operations
- **Allowed Operations**: 
  - File reading operations (`read_file`, `list_dir`, `glob_file_search`, etc.)
  - Log viewing and analysis
  - Code analysis and pattern searching
  - Non-destructive diagnostic commands
  - Information gathering and reasoning only

#### Rule 2: Modification Permission Grant System
- **Permission Trigger**: Modifications are only allowed when the user's prompt begins with `$$$` (three dollar signs, either full-width ＄＄＄ or half-width $$$)
- **Single Prompt Scope**: Permission is granted ONLY for the specific prompt that contains the `$$$` trigger
- **No Persistent Permissions**: Each subsequent prompt requires the `$$$` trigger to enable modification permissions

#### Rule 3: Explicit Permission Declaration Required
- **Explicit Declaration**: Without the `$$$` trigger, assume read-only mode regardless of previous permissions
- **No Exceptions**: Modification permissions are valid only with explicit declaration

### Implementation Examples
```
// Read-only mode (default)
"Show me the current theme structure"

// Modification mode enabled
"$$$ Update the contact form validation"

// Back to read-only mode
"Check if the changes were applied correctly"
```

## Project Overview

This is a WordPress theme built with TypeScript, Sass, and Bun. The theme follows modern web development practices with minimal WordPress dependency and responsive design principles.

## Development Commands

### Build System
- `bun run dev` - Start development mode with TypeScript and Sass file watching
- `bun run build` - Build production assets (TypeScript → assets/js/, Sass → assets/css/)
- `bun run dev:ts` - Watch TypeScript files only
- `bun run dev:sass` - Watch Sass files only
- `bun run clean` - Clean all built assets from assets/ directories

### Installation
- `bun install` - Install all dependencies

## Architecture

### File Structure
- `src/ts/` - TypeScript source files (compiled to assets/js/)
- `src/scss/` - Sass source files with organized architecture (base/, components/, layout/, pages/, utilities/)
- `src/php/` - Additional PHP utilities
- `inc/` - Core WordPress theme functions (setup.php, custom-functions.php)
- `template-parts/` - Reusable template components (header/, footer/, content/)
- `templates/` - Custom page templates (e.g., page-contact.php)

### WordPress Theme Integration
- **Theme constants**: `THEME_VERSION`, `THEME_DIR`, `THEME_URI` defined in functions.php
- **Contact form**: Implements PHP standard mail() function with TypeScript validation, avoiding WordPress AJAX dependency
- **Theme customizer**: Email, phone, and address settings in WordPress Customizer → Theme Options

### TypeScript Configuration
- Target: ES2020 with DOM support
- Build tool: Bun (not Node.js)
- Output: assets/js/ directory
- Strict TypeScript enabled with comprehensive type checking

### Sass Architecture
- Main entry: `src/scss/style.scss`
- Variables and mixins: `_variables.scss`, `_mixins.scss`
- Organized with base/, components/, layout/, pages/, utilities/ directories
- Output: Compressed CSS to assets/css/style.css

### WordPress Features
- **Custom post types**: Configured in inc/setup.php
- **Widget areas**: Blog sidebar and footer widgets registered
- **Navigation menus**: Primary and footer menus
- **Theme support**: Post thumbnails, HTML5, custom logo, selective refresh
- **Performance optimizations**: Emoji scripts disabled, clean wp_head output

### Contact Form
- Form submission via standard HTTP POST (avoiding WordPress AJAX dependency)
- Client-side validation: TypeScript-based form validation for improved user experience
- Server-side processing: PHP standard mail() function for email delivery
- Email configuration: Set recipient in Theme Options or environment variables
- Security: Nonce verification and input sanitization with WordPress and PHP functions
- Error handling: Comprehensive validation on both client and server sides

### Deployment
- Production path: Configure based on hosting environment and project requirements
- Required files: All PHP files, assets/ directory, inc/, templates/, style.css
- Exclude from deployment: src/, node_modules/, bun.lockb, development configs
- Deployment method: rsync, FTP, or hosting provider's deployment tools

## Development Notes
- Always run `bun run build` before deployment
- Test contact form functionality after email configuration changes
- WordPress 6.0+ and PHP 7.4+ required
- Theme follows WordPress coding standards and best practices
