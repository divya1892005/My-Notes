import React from "react";
import '../App';
import { Link } from 'react-scroll';

export default function Othernotes() {

    return(
        <div>
            <div className='topics'>
                <h1>Notes</h1>
                <div style={{paddingBottom: "30px"}}>
                                    {/* Topics */}
          <div style={{paddingBottom: "30px"}}>
          <h2 className='Reacttopics'>Topics:</h2>
          <ol className='w3-order-list'>
            <li><Link className='w3-link' activeClass="active" to="topic0" spy={true} smooth={true} offset={-70} duration={500}>VS Code Extensions</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic1" spy={true} smooth={true} offset={-70} duration={500}>How to push local code to github repo step-by-step</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic2" spy={true} smooth={true} offset={-70} duration={500}>Free Hosting</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic3" spy={true} smooth={true} offset={-70} duration={500}>How can I push the latest changes to the repository after making the updates?</Link></li>
          </ol>
          </div>

                <ol className='second-order-list'>

                    {/* VS Code Extensions */}
                    <li id="topic0" style={{paddingTop: "10px"}}><b>VS Code Extensions</b>
                    <div className='code'>
                        <div>1. ClassName Completion in CSS</div>
                    </div>
                    </li>

                    {/* How to push local code to github repo step-by-step */}
                    <li id="topic1" style={{paddingTop: "10px"}}><b>How to push local code to github repo step-by-step</b>
                    <div className='code'>
                    <div><b>Step 1: Set Up a GitHub Account</b></div>
                    <div><b>Step 2: Create a New Repository on GitHub</b></div>
                    <div style={{padding: "20px 0px 0px 20px"}}>1. Log in to your GitHub account.</div>
                    <div style={{paddingLeft: "20px"}}>2. Inside github.com page on the left side there is a 'New' button click on it.</div>
                    <div style={{paddingLeft: "20px"}}>3. Give your repository a name, a brief description, choose visibility (public or private), and select any additional settings you need.</div>
                    <div style={{padding: "0px 0px 20px 20px"}}>4. Click "Create repository".</div>
                    <div><b>Step 3: Install Git</b></div>
                    <div style={{paddingBottom: "20px"}}><b>Step 4: Initialize Git in Your Local Project</b></div> 
                    <div style={{paddingLeft: "20px"}}>1. Open your project's directory in a terminal or command prompt.</div>
                    <div style={{paddingLeft: "20px"}}>2. Run the following commands:</div>
                    <div className="router-round-corner">
                    <div>git init</div>                    
                    </div>
                    <div style={{paddingBottom: "20px"}}><b>Step 5: Add and Commit Your Code</b></div>
                    <div style={{paddingLeft: "20px"}}>1. Add the files you want to commit using the following command:</div>
                    <div className="router-round-corner">
                    <div>git add .</div>                    
                    </div>
                    <div style={{paddingLeft: "20px"}}>This stages all changes in the current directory for commit. You can replace the dot with specific filenames to stage only those files.</div>
                    <div style={{paddingLeft: "20px"}}>1. Commit your changes with a descriptive message:</div>
                    <div className="router-round-corner">
                    <div>git commit -m "Your commit message here"</div>   
                    </div>   
                    <div style={{paddingBottom: "20px"}}><b>Step 6: Link Your Local Repo to the GitHub Repo</b></div> 
                    <div style={{paddingLeft: "20px"}}>1. Go to your GitHub repository's page and copy the repository's URL.</div>
                    <div style={{paddingLeft: "20px"}}>2. Back in your terminal, add the remote repository using the following command:</div>
                    <div className="router-round-corner">
                    <div>git remote add origin &lt;repository_url&gt;</div>                    
                    </div>     
                    <div style={{paddingBottom: "20px"}}><b>Step 7: Push Your Code to GitHub</b></div>
                    <div style={{paddingLeft: "20px"}}>1. Push your code to GitHub using the following command:</div>
                    <div className="router-round-corner">
                    <div>git push -u origin master</div>                    
                    </div>   
                    <div>If you're using a different branch, replace 'master' with the branch name.</div>    
                    <div style={{paddingBottom: "5px", paddingTop: "20px"}}><b>Step 8: Enter Your GitHub Credentials</b></div> 
                    <div>You might be prompted to enter your GitHub username and password/token the first time you push. If you're concerned about security, you can set up a Personal Access Token (PAT) and use that instead of your password.</div> 
                    <div style={{paddingBottom: "5px", paddingTop: "20px"}}><b>Step 9: Verify on GitHub</b></div> 
                    <div>Refresh your GitHub repository's page in your browser. You should now see your code files and any changes you've pushed.</div>
                    </div>
                    </li>

                    {/* Free Hosting */}
                    <li id="topic2" style={{paddingTop: "10px"}}><b>Free Hosting</b>
                    <div className='code'>
                    <div><b>Vercel</b> : Vercel provides seamless deployment for frontend projects, including React. It offers a simple and quick setup process with automatic deployments. You can connect your GitHub repository to Vercel and it will automatically build and deploy your React app whenever you push changes to your repository.</div>
                    <div style={{padding: "20px"}}>
                    Website Link:
                        <a className="youtube-link" target="_blank" rel="noopener noreferrer" href="https://vercel.com/dashboard"> Vercel</a>
                        </div>
                    <div>1. Click on the 'Add New' button located on the right side.</div>
                    <div>2. Select 'project'</div>
                    <div>3. Import your Project.</div>
                    <div>4. Next Click on 'Deploy' button</div>
                    <div>5. Congratulation your project is deployed.</div>
                    <div>6. To visit that page click on 'continue to dashboard' button.</div>
                    <div>7. Next click on 'visit' button.</div>
                    </div>
                    </li>

                    {/* How can I push the latest changes to the repository after making the updates? */}
                    <li id="topic3" style={{paddingTop: "10px"}}><b>How can I push the latest changes to the repository after making the updates?</b>
                    <div className='code'>
                    <div>If you've made changes to your code and you want to push the latest changes to your GitHub repository, follow these steps:</div>
                    <div style={{paddingBottom: "10px", paddingTop: "20px"}}><b>Step 1: Check Your Changes</b></div>       
                    <div>First, make sure you're in the directory of your local project in your terminal or command prompt. Use the following command to see the changes you've made:</div>    
                    <div className="router-round-corner">
                    <div>git status</div>                    
                    </div>    
                    <div>This will show you which files have been modified.</div>   
                    <div style={{paddingBottom: "10px", paddingTop: "20px"}}><b>Step 2: Stage Your Changes</b></div>       
                    <div>If you're happy with the changes and you want to include them in the next commit, use the following command to stage all changes:</div>    
                    <div className="router-round-corner">
                    <div>git add .</div>                    
                    </div>    
                    <div>Or, if you only want to stage specific files, use:</div>
                    <div className="router-round-corner">
                    <div>git add &lt;filename1&gt; &lt;filename2&gt;</div>                    
                    </div> 
                    <div style={{paddingBottom: "10px", paddingTop: "20px"}}><b>Step 3: Commit Your Changes</b></div>       
                    <div>Commit your staged changes with a descriptive message:</div>    
                    <div className="router-round-corner">
                    <div>git commit -m "Your commit message here"</div>                    
                    </div>    
                    <div style={{paddingBottom: "10px", paddingTop: "20px"}}><b>Step 4: Push Your Changes</b></div>       
                    <div>Push your committed changes to the GitHub repository using the following command:</div>    
                    <div className="router-round-corner">
                    <div>git push origin master</div>                    
                    </div>  
                    <div>Remember to replace 'master' with the branch name if you're working on a different branch.</div>  
                    </div>
                    </li>
                    
                </ol>
                </div>
            </div>
        </div> 
    )
}