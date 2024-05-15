import React, { useState, useEffect, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './scroll.css'


function Project() {

    const tutorials = [
        {
          blockIndex: 0,
          text: "This code block shows how to import SwiftUI, which is essential for building iOS apps.",
          code: `import SwiftUI`
        },
        {
          blockIndex: 1,
          text: "Here we define a SwiftUI view that displays a simple greeting.",
          code: `struct ContentView: View {
            var body: some View {
              Text("Hello, world!")
            }
          }`
        },
        {
          blockIndex: 2,
          text: "This example demonstrates adding a button that prints a message when clicked.",
          code: `struct ContentView: View {
            var body: some View {
              Button("Click me") {
                print("Button was clicked")
              }
            }
          }`
        },
        {
          blockIndex: 3,
          text: "This example demonstrates adding a button that prints a message when clicked.",
          code: `struct ContentView: View {
            var body: some View {
              Button("Click me") {
                print("Button was clicked")
              }
            }
          }`
        },
        {
          blockIndex: 4,
          text: "This example demonstrates adding a button that prints a message when clicked.",
          code: `struct ContentView: View {
            var body: some View {
              Button("Click me") {
                print("Button was clicked")
              }
            }
          }`
        },
        {
          blockIndex: 5,
          text: "This example demonstrates adding a button that prints a message when clicked.",
          code: `struct ContentView: View {
            var body: some View {
              Button("Click me") {
                print("Button was clicked")
              }
            }
          }`
        },
        {
          blockIndex: 6,
          text: "This example demonstrates adding a button that prints a message when clicked.",
          code: `struct ContentView: View {
            var body: some View {
              Button("Click me") {
                print("Button was clicked")
              }
            }
          }`
        },
        {
          blockIndex: 7,
          text: "This example demonstrates adding a button that prints a message when clicked.",
          code: `struct ContentView: View {
            var body: some View {
              Button("Click me") {
                print("Button was clicked")
              }
            }
          }`
        },
        {
          blockIndex: 8,
          text: "This example demonstrates adding a button that prints a message when clicked.",
          code: `struct ContentView: View {
            var body: some View {
              Button("Click me") {
                print("Button was clicked")
              }
            }
          }`
        },
        {
          blockIndex: 9,
          text: "This example demonstrates adding a button that prints a message when clicked.",
          code: `struct ContentView: View {
            var body: some View {
              Button("Click me") {
                print("Button was clicked")
              }
            }
          }`
        },
        {
          blockIndex: 10,
          text: "This example demonstrates adding a button that prints a message when clicked.",
          code: `struct ContentView: View {
            var body: some View {
              Button("Click me") {
                print("Button was clicked")
              }
            }
          }`
        }
      ];
      const [activeIndex, setActiveIndex] = useState(0);
  const tutorialRefs = useRef(tutorials.map(() => React.createRef()));
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
        console.log(window.scrollY);
      const { scrollTop, clientHeight } = containerRef.current;
      const scrollPosition = scrollTop + clientHeight / (100/11);

      const index = tutorialRefs.current.findIndex(ref => {
        const { offsetTop } = ref.current;
        return offsetTop > scrollPosition;
      }) - 1;

      if (index >= 0) {
        setActiveIndex(index);
      } else {
        setActiveIndex(tutorials.length - 1);
      }
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ display: 'flex', flexDirection: 'row', height: '100vh', overflowY: 'auto' }}
    >
      <div style={{ flex: 1, padding: 10 }}>
        {tutorials.map((tutorial, index) => (
          <div
            key={index}
            ref={tutorialRefs.current[index]}
            style={{
              background: index === activeIndex ? '#bde0fe' : 'none',
              margin: '10px 0px 10px 0px',
              padding: '20px',
              borderRadius: '5px'
            }}
          >
            <p>{tutorial.text}</p>
          </div>
        ))}
      </div>
      <div style={{ flex: 2, padding: 10, position: 'sticky', top: 0, height: '100vh' }}>
        <SyntaxHighlighter language="swift" style={solarizedlight} showLineNumbers={true}>
          {tutorials[activeIndex].code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
  }

export default Project;

  