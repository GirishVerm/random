import React, { useState, useRef, useEffect } from 'react';
import './scroll.css';

const data = [
  { text: "Step 1: This is the ContentView view. It's the first view that you'll see when you launch your app.", code: [4] },
  { text: "Step 2: You create the user interface, or UI, for your app inside the body. The entire contents of your app are in the code below.", code: [6, 7, 8] },
  { text: "Step 3: TabView is how you create a user interface with tabs. Inside the tab view, you list each of the tab items that you want.", code: [9, 10, 11] }
];

const Scroll = () => {
  const [highlightedLines, setHighlightedLines] = useState([]);
  const textRefs = useRef([]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const textBlockIndex = textRefs.current.findIndex(
      ref => ref && ref.current && ref.current.offsetTop > scrollPosition
    );

    if (textBlockIndex === -1) {
      setHighlightedLines([]);
    } else {
      setHighlightedLines(data[textBlockIndex].code);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="right">
        {data.map((block, index) => (
          <div
            key={index}
            ref={el => (textRefs.current[index] = { current: el })}
            className="text-block"
          >
            {block.text}
          </div>
        ))}
      </div>
      <div className="left">
        <pre>
          {`1. import SwiftUI;\n2. struct ContentView: View {\n3. var body: some View {\n4.     TabView {\n5.         HomeView()\n6.         .tabItem {\n7.             Label("Home", systemImage: "person")\n8.         }\n9.         StoryView()\n10.        .tabItem {\n11.            Label("Story", systemImage: "book")\n12.        }\n13.        FavoritesView()\n14.        .tabItem {\n15.            Label("Favorites", systemImage: "star")\n16.        }\n17.        FunFactsView()\n18.        .tabItem {\n19.            Label("Fun Facts", systemImage: "hand.thumbsUp")\n20.        }\n21.     }\n22. }\n23. struct ContentView_Previews: PreviewProvider {\n24. static var previews: some View {\n25. ContentView()\n26.     }\n27. }`.split('\n').map((line, lineIndex) => (
            <div
              key={lineIndex}
              className={highlightedLines.includes(lineIndex + 1) ? 'highlight' : ''}
            >
              {line}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default Scroll;
