# Streamify Dashboard - SpeedyBrand
- Hosted Link - [https://streamify-speedy-labs.vercel.app/](https://streamify-speedy-labs.vercel.app/)

- ![Screenshot 2024-09-07 at 8 43 13 AM (2)](https://github.com/user-attachments/assets/204bc45c-ee0c-4bd9-8cb6-d78ecd63db76)

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
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm start
View the application in your browser:
Open http://localhost:3000 to view the app locally.

Deploying the app (optional):
You can deploy this app using services like Vercel or Netlify by connecting your repository and following the hosting service’s deployment instructions.

References/Libraries Used
React Tremor - Used for creating the interactive charts and visualizations (e.g., User Growth, Revenue Distribution, Top Streamed Songs).

Documentation: Tremor React Library
shadcn/ui - Utilized for the Data Table, sorting/filtering functionalities, and UI components.

Documentation: shadcn UI Library
Tailwind CSS - Used as the primary CSS framework for responsive design and styling.

Documentation: Tailwind CSS
React - For building the single-page application.

Documentation: React
React Context API - For state management to manage global state across the dashboard.

Documentation: React Context API
Building a Music Streaming Analytics Dashboard
Dashboard Overview:
This is a single-page application (SPA) that includes the following sections:

Key Metrics:

Total Users
Active Users
Total Streams
Revenue
Top Artist
Data Visualization:

User Growth Chart (line chart)
Revenue Distribution (pie chart)
Top 5 Streamed Songs (bar chart)
Data Table:

List of recent streams with columns for Song Name, Artist, Date Streamed, Stream Count, and User ID.
User Interaction Features:
Sorting & Filtering: The data table allows sorting by Date or Stream Count and filtering by Artist or Song Name.
Chart Interactions: Hovering over points in the charts displays exact numbers, and clicking on revenue sources filters the data table.
Bonus Features:
Responsive Design: The dashboard is fully responsive and adapts well to different screen sizes.
Optimized Performance: Implemented lazy loading and code splitting to improve load times and minimize re-renders.
Future Enhancements:
Adding real-time data integration with a backend.
Implementing more detailed filtering options across all sections.
Performance Considerations
Code Splitting: Utilized React's lazy loading for route-based code splitting.
Memoization: Applied React.memo and useMemo for performance optimization, particularly for expensive calculations in chart rendering.
Minimal Re-renders: Ensured efficient state management with the Context API to minimize re-renders and boost performance.
Trade-offs and Challenges
Data Persistence: Since no backend was integrated, all data was mocked, which limits real-time functionality.
Performance vs. Interactivity: Balancing rich interactivity and performance was a challenge, especially with the large dataset simulations.
Library Learning Curve: Familiarizing myself with the Tremor and shadcn UI libraries took some time, but they ultimately enhanced the dashboard’s look and functionality.
Conclusion
This project was a great opportunity to build a feature-rich, interactive analytics dashboard using modern React tools. The focus was on creating a user-friendly interface while ensuring good performance and maintainability.
