# Streamify Dashboard - SpeedyBrand

- **Hosted Link** - [https://streamify-speedy-labs.vercel.app/](https://streamify-speedy-labs.vercel.app/)
<img width="1792" alt="Screenshot 2024-09-09 at 5 46 03 PM" src="https://github.com/user-attachments/assets/adce7c56-bc99-4e59-84c8-a515cde44b28">


## Thought Process

The primary objective of this project was to build an analytics dashboard for a fictional music streaming service, "Streamify," that provides key insights into user activity, revenue generation, and content performance. My approach focused on creating a user-friendly, responsive, and visually appealing dashboard using modern web technologies.

### Key factors I considered:

- **UI/UX**: The design should be clean, minimal, and adaptable to various screen sizes. Usability and clarity were top priorities.
- **Performance**: Optimizing load times and avoiding unnecessary re-renders were crucial. I implemented lazy loading and code-splitting techniques to improve performance.
- **Interactivity**: I incorporated interactive charts and tables that enable the user to hover over data points for detailed insights and perform sorting and filtering operations.

### Additional Considerations:

- **Mocked Data**: To simulate real-time analytics, I created realistic mock data for user activity, revenue breakdown, and song streaming history.
- **Chart Interactions**: Users can interact with the charts, hover to see details, and filter the data based on selections.

## Instructions to Run

1. **Clone the repository:**

   ```bash
   git clone <repository-link>
   cd streamify-dashboard

2. **Install dependencies:**

   ```bash
   Copy code
   npm install

3. **Run the development server:**

   ```bash
   Copy code
   npm start

4. **View the application in your browser:**
   Open http://localhost:3000 to view the app locally.

**Deploying the app (optional):**
You can deploy this app using services like Vercel or Netlify by connecting your repository and following the hosting service’s deployment instructions.

##   References/Libraries Used
- React Tremor - Used for creating the interactive charts and visualizations (e.g., User Growth, Revenue Distribution, Top Streamed Songs).
[Tremor React Library Documentation](https://tremor.so/docs/getting-started/installation)

- shadcn/ui - Utilized for the Data Table, sorting/filtering functionalities, and UI components.
[shadcn UI Library Documentation](https://ui.shadcn.com/docs)

- Tailwind CSS - Used as the primary CSS framework for responsive design and styling.
[Tailwind CSS Documentation](https://v2.tailwindcss.com/docs)

- React - For building the single-page application.
[React Documentation](https://react.dev/learn/installation)

- React Context API - For state management to manage global state across the dashboard.
[React Context API Documentation](https://reactjs.org/docs/context.html)
