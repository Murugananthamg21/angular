export interface SidebarData {
    category?: string;         
    title: string;                 
    icon: string;                  
    options?: SidebarOption[];    
}

export interface SidebarOption {
    name: string;                
    url: string;                  
}
