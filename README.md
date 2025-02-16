# API Management Platform

## Overview
The API Management Platform is a modern, full-stack web application designed to streamline API development, documentation, and management. Built with Angular 18 and Node.js, it provides a comprehensive solution for organizations to manage their APIs throughout their lifecycle.

## Problem Statement
Organizations face several challenges when managing multiple APIs:
- Lack of centralized API documentation
- Inconsistent API versioning
- Difficulty in managing API access and permissions
- No standardized way to monitor API usage
- Complex user role management
- Scattered API specifications

## Solution
Our API Management Platform addresses these challenges by providing:
- Centralized API documentation and specification management
- Role-based access control (ADMIN, API_MANAGER, DEVELOPER, VIEWER)
- API version control and history
- Interactive API testing interface
- Usage analytics and monitoring
- Team collaboration features

## Key Features

### 1. User Management
- Secure authentication using JWT
- Role-based authorization
- User profile management
- Password recovery system
- Activity logging

### 2. API Management
- API creation and editing
- Version control
- Swagger/OpenAPI specification support
- API testing interface
- Usage statistics

### 3. Documentation
- Automatic documentation generation
- Markdown support
- Code examples
- API endpoint testing
- Export functionality

### 4. Security
- JWT-based authentication
- Role-based access control
- API key management
- Rate limiting
- Request logging

## Technical Stack

### Frontend
- Angular 18
- Angular Material UI
- RxJS
- TypeScript
- SCSS

### Backend
- Node.js
- Express.js
- SQLite database
- JWT authentication
- Swagger/OpenAPI

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v18)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd api-management-platform
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
```

### Running the Application

1. Start the backend server:
```bash
cd backend
node server.js
```
The server will start on http://localhost:3000

2. Start the frontend application (in a new terminal):
```bash
ng serve
```
The application will be available at http://localhost:4200

### Initial Setup

1. Register an admin account:
   - Navigate to http://localhost:4200/auth/register
   - Fill in your details
   - The first user will automatically be assigned the ADMIN role

2. Login:
   - Navigate to http://localhost:4200/auth/login
   - Use your registered email and password

## Project Structure

```
api-management-platform/
├── src/                          # Frontend source code
│   ├── app/
│   │   ├── core/                # Core modules, services, and guards
│   │   ├── features/            # Feature modules
│   │   │   ├── auth/           # Authentication feature
│   │   │   ├── apis/           # API management feature
│   │   │   └── users/          # User management feature
│   │   └── shared/             # Shared components and utilities
│   ├── assets/                  # Static assets
│   └── styles/                  # Global styles
├── backend/                     # Backend source code
│   ├── server.js               # Main server file
│   └── database.sqlite         # SQLite database
└── README.md                   # Project documentation
```

## User Roles

1. **ADMIN**
   - Full system access
   - User management
   - Role assignment
   - System configuration

2. **API_MANAGER**
   - API creation and management
   - Version control
   - Documentation management
   - Usage analytics

3. **DEVELOPER**
   - API testing
   - Documentation viewing
   - Limited API management
   - Personal API key management

4. **VIEWER**
   - Read-only access
   - Documentation viewing
   - API testing

## What's New?

1. **Modern Architecture**
   - Latest Angular 18 features
   - Standalone components
   - Improved performance
   - Better developer experience

2. **Enhanced Security**
   - JWT-based authentication
   - Role-based access control
   - API key management
   - Secure password handling

3. **Developer-Friendly Features**
   - Interactive API testing
   - Real-time documentation updates
   - Version control
   - Code examples

## Why Choose This Platform?

1. **Comprehensive Solution**
   - All-in-one API management
   - Built-in documentation
   - User management
   - Analytics

2. **Modern Technology Stack**
   - Latest Angular version
   - Material Design
   - Scalable backend
   - SQLite for easy setup

3. **Security First**
   - Role-based access
   - Secure authentication
   - API key management
   - Activity logging

4. **Easy to Use**
   - Intuitive interface
   - Quick setup
   - Comprehensive documentation
   - Minimal configuration

5. **Scalable Architecture**
   - Modular design
   - Easy to extend
   - Performance optimized
   - Well-structured codebase

## Contributing
We welcome contributions! Please read our contributing guidelines before submitting pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Support
For support, please open an issue in the repository or contact the development team.

## Roadmap
- API metrics and analytics
- Team collaboration features
- Advanced API testing tools
- Custom documentation themes
- Integration with CI/CD pipelines
- OAuth2 support
- GraphQL support
