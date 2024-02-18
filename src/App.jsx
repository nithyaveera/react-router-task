import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavComp from './component/NavComp';
import AllComponent from './component/AllComponent';
import Fullstackcomp from './component/Fullstackcomp';
import DatascienceComp from './component/DatascienceComp';
import CyberSecuritycomp from './component/CyberSecuritycomp';
import CareerComp from './component/CareerComp';
import Headfullstack from './component/Headfullstack';
import Headdata from './component/Headdata';
import HeaderComp from './component/HeaderComp';

const App = () => {
  let data = [
    {
      "head": "Full Stack Development",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Frontend-vs-Backend-Development-Top-Differences-768x480.webp",
      "content": "A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
      "date": "28",
      "month": "January"
    },
    {
      "head": "Data Science",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science-768x480.webp",
      "content": "Data science involves the use of various techniques and algorithms to extract insights and knowledge from structured and unstructured data. It includes skills in programming (Python, R), statistics, machine learning, data analysis, and data visualization...",
      "date": "15",
      "month": "March"
    },
    {
      "head": "Cybersecurity",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity-768x480.webp",
      "content": "Cybersecurity focuses on protecting systems, networks, and programs from digital attacks. It includes skills in network security, cryptography, penetration testing, and security frameworks...",
      "date": "10",
      "month": "July"
    },
    {
      "head": "Career",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students-768x480.webp",
      "content": "Career development involves planning and managing one's career path. It includes skills in goal setting, networking, resume building, job searching, and professional growth...",
      "date": "22",
      "month": "November"
    }, {
      "head": "Full Stack Development",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect-768x480.webp",
      "content": "A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
      "date": "28",
      "month": "January"
    },
    {
      "head": "Data Science",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering-768x480.webp",
      "content": "Data science involves the use of various techniques and algorithms to extract insights and knowledge from structured and unstructured data. It includes skills in programming (Python, R), statistics, machine learning, data analysis, and data visualization...",
      "date": "15",
      "month": "March"
    },
    {
      "head": "Cybersecurity",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
      "content": "Cybersecurity focuses on protecting systems, networks, and programs from digital attacks. It includes skills in network security, cryptography, penetration testing, and security frameworks...",
      "date": "10",
      "month": "July"
    },
    {
      "head": "Career",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/04/javascript-animated-image-1200x675.jpg",
      "content": "Career development involves planning and managing one's career path. It includes skills in goal setting, networking, resume building, job searching, and professional growth...",
      "date": "22",
      "month": "November"
    },
    {
      "head": "Full Stack Development",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Backend-Developer-Salary-in-India-USA-768x480.webp",
      "content": "A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
      "date": "28",
      "month": "January"
    },
    {
      "head": "Data Science",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-1536x804.webp",
      "content": "Data science involves the use of various techniques and algorithms to extract insights and knowledge from structured and unstructured data. It includes skills in programming (Python, R), statistics, machine learning, data analysis, and data visualization...",
      "date": "15",
      "month": "March"
    },
    {
      "head": "Cybersecurity",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity-768x480.webp",
      "content": "Cybersecurity focuses on protecting systems, networks, and programs from digital attacks. It includes skills in network security, cryptography, penetration testing, and security frameworks...",
      "date": "10",
      "month": "July"
    },
    {
      "head": "Career",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students-768x480.webp",
      "content": "Career development involves planning and managing one's career path. It includes skills in goal setting, networking, resume building, job searching, and professional growth...",
      "date": "22",
      "month": "November"
    }, {
      "head": "Full Stack Development",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect-768x480.webp",
      "content": "A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
      "date": "28",
      "month": "January"
    },
    {
      "head": "Data Science",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering-768x480.webp",
      "content": "Data science involves the use of various techniques and algorithms to extract insights and knowledge from structured and unstructured data. It includes skills in programming (Python, R), statistics, machine learning, data analysis, and data visualization...",
      "date": "15",
      "month": "March"
    },
    {
      "head": "Cybersecurity",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
      "content": "Cybersecurity focuses on protecting systems, networks, and programs from digital attacks. It includes skills in network security, cryptography, penetration testing, and security frameworks...",
      "date": "10",
      "month": "July"
    },
    {
      "head": "Career",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/04/javascript-animated-image-1200x675.jpg",
      "content": "Career development involves planning and managing one's career path. It includes skills in goal setting, networking, resume building, job searching, and professional growth...",
      "date": "22",
      "month": "November"
    },
    {
      "head": "Full Stack Development",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Backend-Developer-Salary-in-India-USA-768x480.webp",
      "content": "A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
      "date": "28",
      "month": "January"
    },
    {
      "head": "Data Science",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science-768x480.webp",
      "content": "Data science involves the use of various techniques and algorithms to extract insights and knowledge from structured and unstructured data. It includes skills in programming (Python, R), statistics, machine learning, data analysis, and data visualization...",
      "date": "15",
      "month": "March"
    },
    {
      "head": "Cybersecurity",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity-768x480.webp",
      "content": "Cybersecurity focuses on protecting systems, networks, and programs from digital attacks. It includes skills in network security, cryptography, penetration testing, and security frameworks...",
      "date": "10",
      "month": "July"
    },
    {
      "head": "Career",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students-768x480.webp",
      "content": "Career development involves planning and managing one's career path. It includes skills in goal setting, networking, resume building, job searching, and professional growth...",
      "date": "22",
      "month": "November"
    }, {
      "head": "Full Stack Development",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect-768x480.webp",
      "content": "A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
      "date": "28",
      "month": "January"
    },
    {
      "head": "Data Science",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering-768x480.webp",
      "content": "Data science involves the use of various techniques and algorithms to extract insights and knowledge from structured and unstructured data. It includes skills in programming (Python, R), statistics, machine learning, data analysis, and data visualization...",
      "date": "15",
      "month": "March"
    },
    {
      "head": "Cybersecurity",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
      "content": "Cybersecurity focuses on protecting systems, networks, and programs from digital attacks. It includes skills in network security, cryptography, penetration testing, and security frameworks...",
      "date": "10",
      "month": "July"
    },
    {
      "head": "Career",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/04/javascript-animated-image-1200x675.jpg",
      "content": "Career development involves planning and managing one's career path. It includes skills in goal setting, networking, resume building, job searching, and professional growth...",
      "date": "22",
      "month": "November"
    },{
      "head": "Full Stack Development",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Frontend-vs-Backend-Development-Top-Differences-768x480.webp",
      "content": "A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
      "date": "28",
      "month": "January"
    },
    {
      "head": "Data Science",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science-768x480.webp",
      "content": "Data science involves the use of various techniques and algorithms to extract insights and knowledge from structured and unstructured data. It includes skills in programming (Python, R), statistics, machine learning, data analysis, and data visualization...",
      "date": "15",
      "month": "March"
    },
    {
      "head": "Cybersecurity",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity-768x480.webp",
      "content": "Cybersecurity focuses on protecting systems, networks, and programs from digital attacks. It includes skills in network security, cryptography, penetration testing, and security frameworks...",
      "date": "10",
      "month": "July"
    },
    {
      "head": "Career",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students-768x480.webp",
      "content": "Career development involves planning and managing one's career path. It includes skills in goal setting, networking, resume building, job searching, and professional growth...",
      "date": "22",
      "month": "November"
    }, {
      "head": "Full Stack Development",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Backend-Developer-Salary-in-India-USA-768x480.webp",
      "content": "A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
      "date": "28",
      "month": "January"
    },
    {
      "head": "Data Science",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering-768x480.webp",
      "content": "Data science involves the use of various techniques and algorithms to extract insights and knowledge from structured and unstructured data. It includes skills in programming (Python, R), statistics, machine learning, data analysis, and data visualization...",
      "date": "15",
      "month": "March"
    },
    {
      "head": "Cybersecurity",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
      "content": "Cybersecurity focuses on protecting systems, networks, and programs from digital attacks. It includes skills in network security, cryptography, penetration testing, and security frameworks...",
      "date": "10",
      "month": "July"
    },
    {
      "head": "Career",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/04/javascript-animated-image-1200x675.jpg",
      "content": "Career development involves planning and managing one's career path. It includes skills in goal setting, networking, resume building, job searching, and professional growth...",
      "date": "22",
      "month": "November"
    },
    {
      "head": "Full Stack Development",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Frontend-vs-Backend-Development-Top-Differences-768x480.webp",
      "content": "A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
      "date": "28",
      "month": "January"
    },
    {
      "head": "Data Science",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science-768x480.webp",
      "content": "Data science involves the use of various techniques and algorithms to extract insights and knowledge from structured and unstructured data. It includes skills in programming (Python, R), statistics, machine learning, data analysis, and data visualization...",
      "date": "15",
      "month": "March"
    },
    {
      "head": "Cybersecurity",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity-768x480.webp",
      "content": "Cybersecurity focuses on protecting systems, networks, and programs from digital attacks. It includes skills in network security, cryptography, penetration testing, and security frameworks...",
      "date": "10",
      "month": "July"
    },
    {
      "head": "Career",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students-768x480.webp",
      "content": "Career development involves planning and managing one's career path. It includes skills in goal setting, networking, resume building, job searching, and professional growth...",
      "date": "22",
      "month": "November"
    }, {
       "head": "Full Stack Development",
       "image": "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect-768x480.webp",
       "content": "A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
       "date": "28",
       "month": "January"
    },
    {
      "head": "Data Science",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering-768x480.webp",
      "content": "Data science involves the use of various techniques and algorithms to extract insights and knowledge from structured and unstructured data. It includes skills in programming (Python, R), statistics, machine learning, data analysis, and data visualization...",
      "date": "15",
      "month": "March"
    },
    {
      "head": "Cybersecurity",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
      "content": "Cybersecurity focuses on protecting systems, networks, and programs from digital attacks. It includes skills in network security, cryptography, penetration testing, and security frameworks...",
      "date": "10",
      "month": "July"
    },
    {
      "head": "Career",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/04/javascript-animated-image-1200x675.jpg",
      "content": "Career development involves planning and managing one's career path. It includes skills in goal setting, networking, resume building, job searching, and professional growth...",
      "date": "22",
      "month": "November"
    }, {
      "head": "Full Stack Development",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Backend-Developer-Salary-in-India-USA-768x480.webp",
      "content": "A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
      "date": "28",
      "month": "January"
    },
    {
      "head": "Data Science",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering-768x480.webp",
      "content": "Data science involves the use of various techniques and algorithms to extract insights and knowledge from structured and unstructured data. It includes skills in programming (Python, R), statistics, machine learning, data analysis, and data visualization...",
      "date": "15",
      "month": "March"
    }]
  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <div className='container'>
          <HeaderComp />
        </div>
        <Routes>
            <Route path='/' element={<img src="./public/img/header.webp" class="img-fluid" alt="" srcset="" />} />
          <Route path='/Fullstack' element={<Headfullstack />} />
          <Route path='/Datascience' element={<Headdata />} />
          <Route path='/CyberSecurity' element={<img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-1536x340.webp" class="img-fluid" alt="" srcset="" />} />
          <Route path='/Career' element={<img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-1536x340.webp" class="img-fluid" alt="" srcset="" />} />

        </Routes>
        <div>
          <NavComp />
        </div>
        <div className='container'>
        <Routes>
          <Route path='/' element={<AllComponent data={data} /> } />
          <Route path='/Fullstack' element={<Fullstackcomp data={data} />} />
          <Route path='/Datascience' element={<DatascienceComp data={data} />} />
          <Route path='/CyberSecurity' element={<CyberSecuritycomp data={data} />} />
          <Route path='/Career' element={<CareerComp data={data} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;