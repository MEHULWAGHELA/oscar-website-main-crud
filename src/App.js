import './App.css';
import "react-awesome-lightbox/build/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Home from './Pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header1 from './Components/Header/Header1';
import About from './Pages/About';
import Courses from './Pages/Courses';
import AngularCourse from './Components/Courses/CoursesPages/AngularCourse';
import Placement from './Pages/Placement';
import Gallery from './Pages/Gallery';
import CountactUs from './Pages/CountactUs';
import FirstPage from './Components/Gallery/GalleryPages/FirstPage';
import SecondPage from './Components/Gallery/GalleryPages/SecondPage';
import ThirdPage from './Components/Gallery/GalleryPages/ThirdPage';
import FourthPage from './Components/Gallery/GalleryPages/FourthPage';
import FifthPage from './Components/Gallery/GalleryPages/FifthPage';
import FirstPageCourses from './Components/Courses/CoursesPages/FirstPageCourses';
import ShowGalleryPage from './Components/Gallery/ShowGalleryPage';
import AdminSignup from './Admin Panel/AdminSignup';
import SliderCrud from './Admin Panel/Admin/Crud/SliderCrud';
import CoursesCrud from './Admin Panel/Admin/Crud/CoursesCrud';
import AboutCrud from './Admin Panel/Admin/Crud/AboutCrud';
import AdminFormCrud from './Admin Panel/Admin/Crud/AdminFormCrud';
import FormCrud from './Admin Panel/Admin/Crud/FormCrud';
import GalleryCrud from './Admin Panel/Admin/Crud/GalleryCrud';
import InformationCrud from './Admin Panel/Admin/Crud/InformationCrud';
import LearnCrud from './Admin Panel/Admin/Crud/LearnCrud';
import PartnerCrud from './Admin Panel/Admin/Crud/PartnerCrud';
import PlacementCrud from './Admin Panel/Admin/Crud/PlacementCrud';
import TrainingCrud from './Admin Panel/Admin/Crud/TrainingCrud';
import { CookiesProvider } from 'react-cookie';

function App() {
  let ary = [
    { maintitle: 'ANGULAR', to: 'angular', img: require('./Assets/Images/Courses/img1.jpg'), strong: 'Angular JS', p1: ` is a JavaScript framework with a lot of capability. Single Page Application (SPA) developments make use of it. It adds extra characteristics to the HTML DOM and makes it more responsive to user activities. AngularJS is an open source framework that is absolutely free to use, and it is utilised by thousands of developers all over the world. It is distributed under the Apache License 2.0.`, heading: 'Why to Learn AngularJS?', p2: 'Angular JS is a free and open-source framework for building online applications. Misko Hevery and Adam Abrons came up with the idea in 2009. It is now Google’s responsibility to keep it up to date.', p3: 'Angular JS is a powerful framework for building Rich Internet Applications (RIA).', p4: 'Angular JS gives developers the ability to construct elegant Model View Controller (MVC) client-side apps using JavaScript.Angular JS-based applications are cross-browser compatible. AngularJS processes JavaScript code in a browser-agnostic manner.', p5: 'Angular JS is an open source framework that is absolutely free to use, and it is utilised by thousands of developers all over the world. It is distributed under the Apache License 2.0.', p6: 'Angular JS is a framework for developing large-scale, high-performance, and simple-to-maintain web applications.', accordian: [{ eventkey: 1, title: 'Introduction To HTML', items: ["HTML Basics, Elements, Attributes, Styles", 'Forms, Form Elements, Input Element Types', 'Input Attributes, File Paths, Script tag', 'HTML &XHTML'] }, { eventkey: 2, title: 'Introduction To CSS', items: ["CSS Introduction, Syntax, Selectors, Styling", 'Pseudo class, Pseudo Elements', 'CSS Tables, CSS Box Models', 'CSS Opacity, CSS Navigation Bar, Dropdowns'] }, { items: ['JavaScript Statements, Keywords, Functions', 'JavaScript Programs, Operators, Functions', 'Function Parameters, Function Return Types', 'Data Types, Primitive Types'], eventkey: 3, title: 'Introduction To JavaScript' }, { items: ['Object Oriented Programming, Object Creation', 'Adding Methods of Objects', 'JavaScript Loops & Iteration', 'Adding Properties of Objects', 'JavaScript Conditional Statements', 'Enumerating Properties, Callbacks, JSON'], eventkey: 4, title: 'Working With Objects' }, { items: ['What is Angular?', 'Why Angular?', 'Why MVC matters', 'MVC-The Angular way', 'Features of Angular, Model-View-Controller', 'My First Angular app'], eventkey: 5, title: 'Angular Basics' }, { items: ['All about Angular Expressions', 'How to use expressions, Angular vs JavaScript'], eventkey: 6, title: 'Angular Expressions' }, { items: ['Built-In Filters, Using Angular Filters', 'Creating Custom Filters'], eventkey: 7, title: 'Filters' }, { items: ['Introduction to Directives, Directive Lifecycle', 'Binding controls to data, Matching directives', 'Using Angular built-in directives', 'Creating a custom directive'], eventkey: 8, title: 'Directives' }, { items: ['Role of a Controller, Controllers & Modules', 'Attaching Properties and functions to scope', 'Nested Controllers, Using Filters in Controllers', 'Controllers in External Files'], eventkey: 9, title: 'Controllers' }, { items: ['Introduction to Angular Modules', 'Bootstrapping Angular'], eventkey: 10, title: 'Angular Modules' }, { items: ['Working with Angular Forms, Model Binding', 'Forms Events, Updating Models with a Twist', 'Form Controller, Validating Angular Forms', '$error object'], eventkey: 11, title: 'Angular Forms' }, { items: ['What is scope, Scope Lifecycle', 'Scope Inheritance, Scope & Controllers', 'Root scope, Scope Broadcasting', 'Two-way data binding, Scope Inheritance', 'Scope & Directives, $apply and $watch', 'Scope Events'], eventkey: 12, title: 'Scope' }, { items: ['What is Dependency Injection', 'Creating Services, Factory, Service & Provider', 'Using Dependency Injection, What are services', 'Using Angular JS built in services'], eventkey: 13, title: 'Dependency Injection & Services' }, { items: ['What is SPA, Pros and Cons of SPA', 'Passing Parameters, Changing location', 'Installing the ng Route module, Configure routes', 'Resolving promises, Creating a Single Page Apps'], eventkey: 14, title: 'Single Page Application (SPA)' }, { items: ['ng Animate Module, CSS Transforms', 'CSS Transitions, Applying Animations'], eventkey: 15, title: 'Angular Animation' }] },
    { maintitle: 'REACT JS', to: 'reactJS', img: require('./Assets/Images/Courses/img2.png'), strong: 'React JS', p1: ' is a JavaScript toolkit that allows you to create reusable user interface components. The following is the definition from the official React documentation:', heading: 'Why we use React JS?', p2: 'The primary goal of React JS is to create User Interfaces (UI) that increase app speed. It makes use of virtual DOM (JavaScript object), which increases the app’s performance. The virtual DOM in JavaScript is faster than the conventional DOM. React JS can be used on the client and server side, as well as in conjunction with other frameworks. It employs component and data patterns to improve readability while also assisting in the maintenance of larger apps.', p3: 'React Advantages', p4: 'Uses a JavaScript object called virtual DOM. Because JavaScript virtual DOM is quicker than the conventional DOM, this will increase app speed.', p5: 'It’s compatible with different frameworks and may be used both on the client and server side.', p6: 'Component and data patterns promote readability, which makes larger apps easier to manage.', accordian: [{ eventkey: 1, title: 'ES6 Overview', items: ['History of Javascript', 'What is ES6', 'A word on bable', 'Block scope, let & const', 'Template literals', 'Arrow functions', 'Spread and Rest operators', 'Destructuring', 'Classes - Inheritance, Static properties and methods', 'Inheritance', 'Static properties and methods', 'Promises', 'Modules'] }, { eventkey: 2, title: 'Introduction To React', items: ['What is React?', 'Why React?', 'React version history', 'React 16 vs React 15', 'Just React - Hello World', 'Using create-react-app', 'Anatomy of react project', 'Running the app', 'Debugging first react app'] }, { eventkey: 3, title: 'Templating Using JSX', items: ['Working with React.createElement', 'Expressions', 'Using logical operators', 'Specifying attributes', 'Specifying children'] }, { eventkey: 4, title: 'It’s All About Components', items: ['Significance of component architecture', 'Types of components - Functional, Class based, Pure', 'Component Composition'] }, { eventkey: 5, title: 'Working With State And Props', items: ['What is state and its significance', 'Read state and set state', 'Passing data to component using props', 'Validating props using propTypes', 'Supplying default values to props using defaultProps'] }, { eventkey: 6, title: 'Rendering Lists', items: ['Using React key prop', 'Using map function to iterate on arrays to generate elements'] }, { eventkey: 7, title: 'Event Handling In React', items: ['Understanding React event system', 'Understanding Synthetic event', 'Passing arguments to event handlers'] }, { eventkey: 8, title: 'Working With Forms', items: ['Controlled components', 'Uncontrolled components', 'Understand the significance to defaultValue prop', 'Using react ref prop to get access to DOM element'] }, { eventkey: 9, title: 'Routing With React Router', items: ['Setting up react router', 'Understand routing in single page applications', 'Working with BrowserRouter and HashRouter components', 'Configuring route with Route component', 'Using Switch component to define routing rules', 'Making routes dynamic using route params', 'Working with nested routes', 'Navigating to pages using Link and NavLink component', 'Redirect routes using RedirectComponent', 'Using Prompt component to get consent of user for navigation', 'Path less Route to handle failed matches'] }, { eventkey: 10, title: 'Just Redux', items: ['What is redux', 'Why redux', 'Redux principles', 'Install and setup redux', 'Creating actions, reducer and store'] }, { eventkey: 11, title: 'Immutable.Js For Immutable Data Structures', items: ['What is Immutable.js?', 'Immutable collections', 'Lists', 'Maps', 'Sets'] }, { eventkey: 12, title: 'React Redux', items: ['What is React Redux', 'Why React Redux', 'Install and setup', 'Presentational vs Container components', 'Understand high order component', 'Understanding mapStateToProps and mapDispatchtToProps usage'] }, { eventkey: 13, title: 'Redux Saga(Redux Middleware)', items: ['Why redux middleware', 'Available redux middleware choices', 'What is redux saga', 'Install and setup redux saga', 'Working with Saga helpers', 'Sagas vs promises'] }] },
    { maintitle: 'NODE JS', to: 'nodeJS', img: require('./Assets/Images/Courses/img3.png'), p1: '', heading: '', p2: '', p3: '', p4: '', p5: '', p6: '', accordian: [{ eventkey: 1, title: '', items: [] }] },
    { maintitle: 'FLUTTER', to: 'flutter', img: require('./Assets/Images/Courses/img4.png'), p1: '', heading: '', p2: '', p3: '', p4: '', p5: '', p6: '', accordian: [{ eventkey: 1, title: '', items: [] }] },
    { maintitle: 'REACT NATIVE', to: 'reactNative', img: require('./Assets/Images/Courses/img5.png'), p1: '', heading: '', p2: '', p3: '', p4: '', p5: '', p6: '', accordian: [{ eventkey: 1, title: '', items: [] }] },
    { maintitle: 'UI / UX DESIGNING', to: 'uiux', img: require('./Assets/Images/Courses/img6.jpg'), p1: '', heading: '', p2: '', p3: '', p4: '', p5: '', p6: '', accordian: [{ eventkey: 1, title: '', items: [] }] },
    { maintitle: 'WEB DESIGNING', to: 'webDesigning', img: require('./Assets/Images/Courses/img7.png'), p1: '', heading: '', p2: '', p3: '', p4: '', p5: '', p6: '', accordian: [{ eventkey: 1, title: '', items: [] }] },
    { maintitle: 'WORDPRESS DEVELOPMENT', to: 'wordpress', img: require('./Assets/Images/Courses/img8.png'), p1: '', heading: '', p2: '', p3: '', p4: '', p5: '', p6: '', accordian: [{ eventkey: 1, title: '', items: [] }] },
    { maintitle: 'VUE JS', to: 'vueJS', img: require('./Assets/Images/Courses/img9.png'), p1: '', heading: '', p2: '', p3: '', p4: '', p5: '', p6: '', accordian: [{ eventkey: 1, title: '', items: [] }] },
    { maintitle: 'ASP.NET MVC', to: 'asp.netmvc', img: require('./Assets/Images/Courses/img10.png'), p1: '', heading: '', p2: '', p3: '', p4: '', p5: '', p6: '', accordian: [{ eventkey: 1, title: '', items: [] }] },
    { maintitle: 'ASP.NET CORE', to: 'asp.netcore', img: require('./Assets/Images/Courses/img11.png'), p1: '', heading: '', p2: '', p3: '', p4: '', p5: '', p6: '', accordian: [{ eventkey: 1, title: '', items: [] }] },
    { maintitle: 'CORE PHP', to: 'corePHP', img: require('./Assets/Images/Courses/img12.png'), p1: '', heading: '', p2: '', p3: '', p4: '', p5: '', p6: '', accordian: [{ eventkey: 1, title: '', items: [] }] },
    { maintitle: 'CODEIGNITER (PHP FRAMEWORK)', to: 'codeigniter', img: require('./Assets/Images/Courses/img13.png'), p1: '', heading: '', p2: '', p3: '', p4: '', p5: '', p6: '', accordian: [{ eventkey: 1, title: '', items: [] }] },
    { maintitle: 'LARAVEL (PHP FRAMEWORK)', to: 'laravel', img: require('./Assets/Images/Courses/img14.png'), p1: '', heading: '', p2: '', p3: '', p4: '', p5: '', p6: '', accordian: [{ eventkey: 1, title: '', items: [] }] },
    { maintitle: 'ANDROID', to: 'android', img: require('./Assets/Images/Courses/img15.png'), p1: '', heading: '', p2: '', p3: '', p4: '', p5: '', p6: '', accordian: [{ eventkey: 1, title: '', items: [] }] },
    { maintitle: 'IOS', to: 'ios', img: require('./Assets/Images/Courses/img16.png'), p1: '', heading: '', p2: '', p3: '', p4: '', p5: '', p6: '', accordian: [{ eventkey: 1, title: '', items: [] }] },
    { maintitle: 'DIGITAL MARKETING', to: 'marketing', img: require('./Assets/Images/Courses/img17.png'), p1: '', heading: '', p2: '', p3: '', p4: '', p5: '', p6: '', accordian: [{ eventkey: 1, title: '', items: [] }] },
    { maintitle: 'C PROGRAMMING', to: 'cprogramming', img: require('./Assets/Images/Courses/img18.png'), p1: '', heading: '', p2: '', p3: '', p4: '', p5: '', p6: '', accordian: [{ eventkey: 1, title: '', items: [] }] },
    { maintitle: 'C++ PROGRAMMING', to: 'c++', img: require('./Assets/Images/Courses/img19.png'), p1: '', heading: '', p2: '', p3: '', p4: '', p5: '', p6: '', accordian: [{ eventkey: 1, title: '', items: [] }] },
  ]
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Header1 />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          {console.log(localStorage.getItem('isLogin'))}
          {localStorage.getItem('isLogin') ?
            <>
              <Route path='admin' element={<Navigate to={'/slidercrud'} />} />
              <Route path='slidercrud' element={<SliderCrud />} />
              <Route path='aboutcrud' element={<AboutCrud />} />
              <Route path='adminformcrud' element={<AdminFormCrud />} />
              <Route path='formcrud' element={<FormCrud />} />
              <Route path='gallerycrud' element={<GalleryCrud />} />
              <Route path='coursescrud' element={<CoursesCrud />} />
              <Route path='informationcrud' element={<InformationCrud />} />
              <Route path='learncrud' element={<LearnCrud />} />
              <Route path='partnercrud' element={<PartnerCrud />} />
              <Route path='trainingcrud' element={<TrainingCrud />} />
              <Route path='placementcrud' element={<PlacementCrud />} />
            </>
            :
            <>
              <Route path='/admin' element={<AdminSignup />} />
            </>
          }
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />}>
            <Route path='' element={<FirstPageCourses />} />
            {
              ary.map(x => {
                return <Route path={x.to} element={<AngularCourse obj={x} />} />
              })
            }
          </Route>
          <Route path='/placement' element={<Placement />} />
          <Route path='/gallery' element={<Gallery />}>
            <Route path='' element={<ShowGalleryPage />} />
            <Route path='firstpage' element={<FirstPage />} />
            <Route path='secondpage' element={<SecondPage />} />
            <Route path='thirdpage' element={<ThirdPage />} />
            <Route path='forthpage' element={<FourthPage />} />
            <Route path='fifthpage' element={<FifthPage />} />
          </Route>
          <Route path='/contactus' element={<CountactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
