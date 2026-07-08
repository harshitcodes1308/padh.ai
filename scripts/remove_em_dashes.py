import os

workspace_dir = "/Users/harshitsingh/Documents/padhai-cbse"

exclude_dirs = {".git", "node_modules", ".next", "extracted"}
exclude_extensions = {".png", ".jpg", ".jpeg", ".gif", ".pdf", ".ico", ".woff", ".woff2", ".ttf", ".eot", ".mp4", ".zip", ".tar", ".gz"}

changed_files = 0

for root, dirs, files in os.walk(workspace_dir):
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    
    for file in files:
        _, ext = os.path.splitext(file)
        if ext.lower() in exclude_extensions:
            continue
            
        file_path = os.path.join(root, file)
        
        try:
            with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
                
            # Replace em dash (\u2014) with a normal hyphen (\u002d)
            new_content = content.replace("-", "-")
            
            if new_content != content:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Removed em dashes from: {file_path}")
                changed_files += 1
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

print(f"Done! Updated {changed_files} files.")
