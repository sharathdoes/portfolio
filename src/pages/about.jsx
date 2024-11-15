import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Folder, File } from 'lucide-react';
import Highlights from './highlights';
import Lists from './links';
import Amplify from './amplify';
import anomaly from './anomaly';
import cands from './craft&stitch';
import details from './details';
import langchain from './langchain';
import links from './links';
import movies from './movies';
import Notes from './notes';
import { ScrollArea } from '../components/ui/scroll-area';

const fileStructure = [
    {
      name: 'portfolio',
      type: 'folder',
      children: [
        {
          name: 'about',
          type: 'folder',
          children: [
              { name: 'details.jsx', type: 'file', component: details },
            { name: 'highlights.jsx', type: 'file', component: Highlights },
          ],
        },
        {
          name: 'projects',
          type: 'folder',
          children: [
            { name: 'gen ai', type: 'folder', children: [{ name: 'langchain.jsx', type: 'file', component: langchain }] },
            { name: 'anomaly.jsx', type: 'file', component: anomaly },
            { name: 'amplify.jsx', type: 'file', component: Amplify },
            { name: 'craft&stitch.jsx', type: 'file', component: cands },
          ],
        },
        {
          name: 'connect',
          type: 'folder',
          children: [
            { name: 'links.jsx', type: 'file', component: links },
          ],
        },
        {
          name: 'Fav movies',
          type: 'folder',
          children: [
            { name: 'fav4.jsx', type: 'file', component: movies },
          ],
        },
        { name: 'message.txt', type: 'file', component: Notes },
        
      ],
    },
  ];
  

const FileTreeItem = ({ item, depth, onSelectFile, expandedFolders, toggleFolder, selectedFile }) => {
  const isFolder = item.type === 'folder';
  const isExpanded = expandedFolders[item.name];
  const isSelected = selectedFile === item;

  return (
    <div style={{ paddingLeft: `${depth * 20}px` }}>
      <button
        className={`w-full text-left px-2 py-1 rounded hover:bg-[#2d2d2d] ${
          isSelected ? 'bg-[#2d2d2d]' : ''
        }`}
        onClick={() => (isFolder ? toggleFolder(item.name) : onSelectFile(item))}
      >
        {isFolder ? (
          isExpanded ? (
            <ChevronDown className="inline-block mr-2 h-4 w-4 text-gray-400" />
          ) : (
            <ChevronRight className="inline-block mr-2 h-4 w-4 text-gray-400" />
          )
        ) : null}
        {isFolder ? (
          <Folder className="inline-block mr-2 h-4 w-4 text-yellow-400" />
        ) : (
          <File className="inline-block mr-2 h-4 w-4 " />
        )}
        <span className={`${isFolder ? 'font-medium' : ''} text-gray-200`}>{item.name}</span>
      </button>
      {isFolder && isExpanded && (
        <div>
          {item.children.map((child) => (
            <FileTreeItem
              key={child.name}
              item={child}
              depth={depth + 1}
              onSelectFile={onSelectFile}
              expandedFolders={expandedFolders}
              toggleFolder={toggleFolder}
              selectedFile={selectedFile}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function about() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [expandedFolders, setExpandedFolders] = useState({});

  const toggleFolder = (folderName) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#252422] text-gray-200" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="flex w-full max-w-4xl h-[60vh] bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
        {/* Sidebar */}
        <aside className="w-[35%] border-r border-gray-700" style={{ backgroundColor: '#1e1e1e' }}>
          <ScrollArea className="h-full">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4 text-gray-300">Explore files</h2>
              {fileStructure.map((item) => (
                <FileTreeItem
                  key={item.name}
                  item={item}
                  depth={0}
                  onSelectFile={setSelectedFile}
                  expandedFolders={expandedFolders}
                  toggleFolder={toggleFolder}
                  selectedFile={selectedFile}
                />
              ))}
            </div>
          </ScrollArea>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-auto" style={{ backgroundColor: '#2d2d2d' }}>
          {selectedFile && selectedFile.component ? (
            <div className="p-4 bg-[#1e1e1e] rounded-lg text-gray-300">
              {/* Render the component dynamically */}
              <selectedFile.component />
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-gray-500">
              Select a file to view its content
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
