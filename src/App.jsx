import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import  TabButton  from './components/TabButton.jsx';


function App() {
  let tabContent='Please click a button'
  function handleSelect(selectedButton){

    tabContent=selectedButton;
    
  }
  return (
    <div>
      <Header />
      <main>
      <section id="core-concepts">
      <h2>Core COncepts</h2>
      
      <ul>
        <CoreConcept {...CORE_CONCEPTS[0]}/>
        <CoreConcept {...CORE_CONCEPTS[1]}/>
        <CoreConcept {...CORE_CONCEPTS[2]}/>
        <CoreConcept {...CORE_CONCEPTS[3]}/>
      </ul>
      </section>

      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={()=>handleSelect('Components')}>Components</TabButton>
          <TabButton onSelect={()=>handleSelect('JSX')}>JSX</TabButton>
          <TabButton onSelect={()=>handleSelect('Props')}>Props</TabButton>
          <TabButton onSelect={()=>handleSelect('State')}>State</TabButton>
        </menu>
        {tabContent}
      </section>
      </main>
    </div>
  );
}

export default App;
