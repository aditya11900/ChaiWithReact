import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

export default function RTE({name,control,label,defaultValue=""}) {
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
        <Controller
            name={name || 'content'}
            control={control}
            defaultValue={defaultValue}
            render= {({field: {onChange}}) => (
                <Editor
                initialValue='defaultValue'
                init= {{
                    height: 500,
                    menubar: true,
                    plugins: [
                        "image",
                        "link",
                        "lists",
                        "code",
                        "table",
                        "help",
                        "wordcount",
                        "insertdatetime",
                        "media",
                        "searchreplace",
                        "visualblocks",
                        "advlist",
                        "autolink",
                        "charmap",
                        "print",
                        "preview",
                        "anchor",
                        "fullscreen",
                        "autosave",
                        "autolink",
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic underline | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help',
                        block_formats: 'Paragraph=p;Header 1=h1;Header 2=h2;Header 3=h3;Header 4=h4;Header 5=h5;Header 6=h6;',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px}'
                }}
                onEditorChange={onChange}
                />
            )}
                />
        </div>
  )
}
