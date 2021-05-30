# ~/.config/nvim/init.vim

set runtimepath^=~/.vim runtimepath+=~/.vim/after
let &packpath = &runtimepath
" source ~/.vimrc

call plug#begin("~/.vim/plugged")
  " Plugin Section
  Plug 'dracula/vim'
  Plug 'scrooloose/nerdtree'
  Plug 'ryanoasis/vim-devicons'
  Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
  Plug 'junegunn/fzf.vim'
  Plug 'neoclide/coc.nvim', {'branch': 'release'}
  Plug 'leafgarland/typescript-vim'
  Plug 'peitalin/vim-jsx-typescript'
  Plug 'vim-airline/vim-airline'
  Plug 'vim-airline/vim-airline-themes'
  Plug 'tomasiser/vim-code-dark'
call plug#end()

" coc config
let g:coc_global_extensions = ['coc-emmet', 'coc-css', 'coc-html', 'coc-json', 'coc-prettier', 'coc-tsserver']

"Config Section
syntax enable

" let g:dracula_colorterm = 0
" colorscheme dracula
colorscheme codedark

set number
set encoding=utf-8

" Set split direction
set splitbelow
set splitright

" show whitespace characters
set listchars=eol:$,tab:>·,trail:~,extends:>,precedes:<,space:·

let python_highlight_all=1
let mapleader = " "

" NERDTree config
let g:NERDTreeShowHidden = 1
" let g:NERDTreeMinimalUI = 1
let g:NERDTreeIgnore = []
let g:NERDTreeStatusline = ''
" Automaticaly close nvim if NERDTree is only thing left open
" autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif
" nerdtree mappings
nnoremap <leader>n :NERDTreeFocus<CR>
nnoremap <C-t> :NERDTreeToggle<CR>
nnoremap <leader>f :NERDTreeFind<CR>


" remap keys for split navigation
nnoremap <C-J> <C-W><C-J>
nnoremap <C-K> <C-W><C-K>
nnoremap <C-L> <C-W><C-L>
nnoremap <C-H> <C-W><C-H>

" remap keys for resizing windows
nnoremap <leader>. <C-w>>
nnoremap <leader>, <C-w><
nnoremap <leader>m <C-w>-
nnoremap <leader>k <C-w>+



" HTML/CSS/JS files
au BufNewFile,BufRead *.js,*.html,*.css,*.jsx,*.ts
     \ set tabstop=2
     \ softtabstop=2
     \ shiftwidth=2
     \ expandtab

" Terminal
" turn terminal to normal mode with escape
tnoremap <Esc> <C-\><C-n>
" start terminal in insert mode
au BufEnter * if &buftype == 'terminal' | :startinsert | endif
" open terminal on ctrl+n
function! OpenTerminal()
  split term://zsh
  resize 10
endfunction
nnoremap <c-n> :call OpenTerminal()<CR>

" Fuzzy finder config
nnoremap <C-p> :FZF<CR>
let g:fzf_action = {
  \ 'ctrl-t': 'tab split',
  \ 'ctrl-s': 'split',
  \ 'ctrl-v': 'vsplit'
  \}
let $FZF_DEFAULT_COMMAND = 'ag --ignore "node_modules" -g ""'

" Tab completion
inoremap <silent><expr> <TAB>
      \ pumvisible() ? "\<C-n>" :
      \ <SID>check_back_space() ? "\<TAB>" :
      \ coc#refresh()
inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<C-h>"

function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

" Use <c-space> to trigger completion.
if has('nvim')
  inoremap <silent><expr> <c-space> coc#refresh()
else
  inoremap <silent><expr> <c-@> coc#refresh()
endif

" GoTo code navigation.
nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)


" vim-airline config

" enable tabline
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#fnamemod = ':t'
" let g:airline#extensions#tabline#left_sep = ''
" let g:airline#extensions#tabline#left_alt_sep = ''
" let g:airline#extensions#tabline#right_sep = ''
" let g:airline#extensions#tabline#right_alt_sep = ''

" enable powerline fonts
let g:airline_powerline_fonts = 1
" let g:airline_left_sep = ''
" let g:airline_right_sep = ''

" Switch to your current theme
let g:airline_theme = 'badwolf'

" Always show tabs
set showtabline=2

" We don't need to see things like -- INSERT -- anymore
set noshowmode

" end vim-airline config


" Close all buffers except current one
command BufOnly silent! execute "%bd|e#|bd#"
nnoremap <leader>b :BufOnly<CR>

" Flag unnecessary whitespace
" Use the below highlight group when displaying bad whitespace is desired.
highlight BadWhitespace ctermbg=red guibg=red

" Make trailing whitespace be flagged as bad.
au BufRead,BufNewFile *.py,*.pyw,*.c,*.h,*.ts match BadWhitespace /\s\+$/

" FIX: cursor not changing back to system settings on closing nvim
" (System settings = blinking I-beam)
" Source: https://github.com/neovim/neovim/issues/6665
au VimLeave * set guicursor=a:ver100-blinkon1

" Cycle through buffers
:nnoremap <leader>k :bnext<CR>
:nnoremap <leader>j :bprevious<CR>  
