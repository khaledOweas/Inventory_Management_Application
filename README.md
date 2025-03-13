# Inventory Management Application

An Angular-based inventory management system fulfilling Datenlotsen's developer homework requirements.

## Features
- 📦 Inventory item listing with sorting/pagination
- 🔍 Search by name and filter by stock status
- ➕ Add new items with form validation
- ✏️ Edit existing items
- 🗑️ Delete items with confirmation
- 📱 Responsive UI with PrimeNG components and Metronic Theme 
- 🧩 Modular architecture with lazy-loaded features

## Tech Stack
- **Framework**: Angular 18
- **HTML Template**: Metronic-V8 Theme
- **UI Library**: PrimeNG
- **State Management**: RxJS BehaviorSubject
- **Local Storage**: For mock API persistence
- **Testing**: Jasmine/Karma
- **i18n**: ngx-translate (setup prepared)

## Architecture

```
src/
├── app/
│ ├── core/ # Reusable components & services
│ ├── modules/
│ │ └── inventory/ # Lazy-loaded feature module
│ │ ├── components/
│ │ │ ├── inventory-create/
│ │ │ ├── inventory-list/
│ │ │ └── inventory-update/
│ │ ├── models/
│ │ └── services/
│ └── shared/ # Shared UI components
└── assets/ # Translation files & images
```

## Key Decisions
1. **State Management**: Used BehaviorSubject for centralized state handling
2. **Form Validation**: Reactive forms with custom validation messages
3. **Mock API**: localStorage-based persistence layer
4. **Component Design**: Smart/dumb component separation
5. **Error Handling**: Global error interceptor (base setup)

## Development Setup
1. Clone repo
2. `npm install`
3. `ng serve`
4. Navigate to `http://localhost:4200`

## Tests
Run `ng test` to execute unit tests covering:
- Form validation logic
- Basic service operations
- Component rendering

## Future Improvements
- Add proper backend integration
- Implement NgRx for complex state
- Add E2E tests
- Enhance accessibility
